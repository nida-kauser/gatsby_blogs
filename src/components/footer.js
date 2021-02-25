import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';
 import footerStyles from './footer.module.scss'

 const Footer =() =>{


    const data = useStaticQuery(graphql`
    query{
     site { 
       siteMetadata {
        author
       }
     }
    }
    `)
    return (
<div className = {footerStyles.footer}>
        <p>Created by {data.site.siteMetadata.author} c20201 </p>
        </div>
    )
 }

  export default Footer