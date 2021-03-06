import React,{useEffect,useState} from 'react'
import sanityClient from "../client"
import { useParams } from 'react-router'
import imageUrlBuilder from "@sanity/image-url"
import BlockContent from "@sanity/block-content-to-react"
const builder=imageUrlBuilder(sanityClient)
function urlFor(src){
    return builder.image(src)
}

const SinglePost = () => {
const [singlePost,setPost]=useState(null)
const {slug}=useParams()
useEffect(()=>{
sanityClient.fetch(`*[slug.current=="${slug}"]{
    title,_id,slug,
    mainImage{
        asset->{
            _id,url
        }
    },
    body,
    "name":author->name,
    "authorImage":author->image
} `).then(d=>setPost(d[0])).catch(console.error)
},[])
if(!singlePost)return <div>Loading....</div>
    return (
       <main className="bg-gray-200 min-h-screen p-12">
           <article className="container mx-auto bg-green-100 rounded-lg">
               <header className="relative ">
                   <div className="absolute h-full w-full flex items-center justify-center p-8">
                       <div className="bg-white bg-opacity-75 rounded p-12">
                           <h1 className="cursive text-3xl lg:text-6xl mb-4">{
                               singlePost.title
                           }</h1>
                           <div className="flex justify-center text-gray-800"> <img className="w-10 h-10 rounded-full" alt={singlePost.name} src={urlFor(singlePost.authorImage).url()}/>  </div>
                           <p className="cursive flex items-center pl-2 text-2xl">{singlePost.name}

                           </p>
                       </div>
                   </div>
                   <img src={singlePost.mainImage.asset.url} style={{height:"400px"}} alt={singlePost.title} className="w-full object-cover rounded-t"
                   ></img>
               </header>
               <div className="px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full">
                  <BlockContent blocks={singlePost.body} dataset="production" projectId="zqafzpaq"/>
               </div>
           </article>
       </main>
    )
}

export default SinglePost
