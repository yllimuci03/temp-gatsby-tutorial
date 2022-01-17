import React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import { Link,graphql } from 'gatsby'
import RecipesList from '../components/RecipesList'
import SEO from "../components/SEO"


const About = ({data:{allContentfulRecipe:{nodes:recipes}}}) => {
 
 return (
  <Layout>
    <SEO 
    title='About'/>
   <main className="page">
    <section className="about-page">
     <article>
      <h2>Lorem ipsum, dolor sit amet.</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque molestias ipsam vitae!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, eius. Quisquam sed fugiat nam.</p>
      <Link to="/contact" className='btn'>contact</Link>
     </article>
     <StaticImage src='../assets/images/about.jpeg' alt='abpot pouring'
     className='about-img' placeholder='blurred'/>
    </section>
    <section className="featured-recipes">
     <h5>Look at this Awesomesource!</h5>
     <RecipesList recipes={recipes}/>
    </section>
   </main>
  </Layout>
 )
}

export const query = graphql`
  {
    allContentfulRecipe(
      sort: {fields: title, order: ASC}
      filter: {featured: {eq: true}}
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`
export default About
