import React from 'react'
import {graphql} from 'gatsby'
import RecipesList from '../components/RecipesList'
import Layout from '../components/Layout'
import SEO from "../components/SEO"

const TagTemplate = ({data, pageContext}) => {
 const recipes = data.allContentfulRecipe.nodes
 return (
  <Layout>
    <SEO title={pageContext.tag}/>
  <main className="page">
   <h2>{pageContext.tag}</h2>
   <div className="tag-recipes">
    <RecipesList recipes={recipes}/>
   </div>
  </main>
  </Layout>
 )
}

export const query = graphql`
query GetRecipeByTag($tag:String) {
  allContentfulRecipe(
    sort: {fields: title, order: ASC}
    filter: {content: {tags: {eq: $tag}}}
  ) {
    nodes {
      content {
        id
      }
      prepTime
      cookTime
      title
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
    }
  }
}

`

export default TagTemplate