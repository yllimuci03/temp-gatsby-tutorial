import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import RecipesList from '../components/RecipesList'
import SEO from "../components/SEO"

const contact = ({data}) => {
  const recipes = data.allContentfulRecipe.nodes
 return (
  <Layout>
<SEO title='Contact'/>
<main className="page">
 <section className="contact-page">
  <article className="contact-info">

  <h3>want to get in touch?</h3>
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, delectus?</p>
  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis.</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem voluptas asperiores dolorem?</p>
  </article>
  <article>
   <form action="" className="form contact-form"  action="https://formspree.io/f/mzboddky"
  method="POST">
    <div className="form-row">
     <label htmlFor="name">your name</label>
     <input type="text" name='name' id='name'/>
    </div>
     <div className="form-row">
     <label htmlFor="email">your email</label>
     <input type="email" name='email' id='email'/>
    </div>
    <div className="form-row">
     <label htmlFor="message">message</label>
     <textarea name="message" id="message"></textarea>
    </div>
<button className="btn block" type='submit'>submit</button>
   </form>
  </article>
 </section>
  <section className="featured-recipes">
     <h5>Look at this Awesomesource!</h5>
     <RecipesList recipes={recipes}/>
  </section>

 </main>  </Layout>
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

export default contact
