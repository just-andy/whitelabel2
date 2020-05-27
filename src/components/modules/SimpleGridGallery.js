import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"


const SimpleGridGallery = ({data}) => {

   const response = useStaticQuery(galleryQuery);
   const items = response.allFile.edges
 
   console.log(items);
   

    return (
    <section className="my-8 flex flex-wrap ">
        
         {items.map(({node:item}) => (
           <div className="w-full md:w-1/2 lg:w-1/3 p-1">
               <Img className="thumbnail" fluid={item.childImageSharp.fluid} alt="Project Thumbnail" />
            </div>
         ))}
        
    </section>
    )
}

export default SimpleGridGallery


export const galleryQuery = graphql`
query gallery {
  allFile(filter: {sourceInstanceName: {eq: "gallery"}}) {
    edges {
      node {
        childImageSharp {
         fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid
          }
          id
        }
      }
    }
  }
}`