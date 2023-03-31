const path = require("path")

// graphql function doesn't throw an error so we have to check to check for the result.errors to throw manually
const wrapper = promise =>
  promise.then(result => {
    if (result.errors) {
      throw result.errors
    }
    return result
  })

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await wrapper(
    graphql(`
      {
        prismic {
          allProjects {
            edges {
              node {
                project_title
                project_preview_description
                project_preview_thumbnail
                project_designation
                project_post_date
                _meta {
                  uid
                }
              }
              cursor
            }
          }
        }
      }
    `)
  )

  const projectsList = result.data.prismic.allProjects.edges

  const projectTemplate = require.resolve("./src/templates/project.jsx")

  projectsList.forEach(edge => {
    // The uid you assigned in Prismic is the slug!
    createPage({
      type: "Project",
      match: "/resume/:uid",
      path: `/resume/${edge.node._meta.uid}`,
      component: projectTemplate,
      context: {
        // Pass the unique ID (uid) through context so the template can filter by it
        uid: edge.node._meta.uid,
      },
    })
  })
}

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  if (stage.startsWith("develop")) {
    actions.setWebpackConfig({
      resolve: {
        alias: {
          "react-dom": "@hot-loader/react-dom",
        },
      },
    })
  }
}
