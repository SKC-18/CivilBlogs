import React from 'react'
import { MainLayout } from '../../components/MainLayout'
import BreadCrumbs from '../../components/BreadCrumbs'
import { images } from '../../constants'
import { Link } from 'react-router-dom'


const breadCrumbsData = [
    {name:"Home", link:'/'},
    {name:"Blog", link:'/blog'},
    {name:"Article title", link:'/blog/1'},
]

const ArticleDetailPage = () => {
  return (
   <MainLayout>
    <section className='container mx-auto max-w-5xl flex flex-col px-5 py-5 '>
        <article className='flex-1'>
            <BreadCrumbs data={breadCrumbsData} />
            <img className='rounded-xl w-full' src={images.KU} alt="KU" />
            <Link to ='/blog?category=selectedCategory' className='text-primary text-sm font-roboto inline-block mt-4'>
                Building
            </Link>
            <h1 className='text-xl font-medium font-robot mt-4 text-dark-hard'>Can be sold for 10 Kharab for more information. Note that: most of the time locked by party </h1>
            <div className='mt-4 text-dark-soft'>
                <p className='"leading-7'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat ipsum neque odit perferendis impedit. Soluta siiste. Architecto illum sit omnis rerum nostrum nisi nemo cum quod consectetur sint.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, temporibus. Maxime, eos. Atque, eaque consectetur odit totam quidem voluptatibus, error explicabo perspiciatis possimus ipsam quae. Totam voluptates ad maxime omnis.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda minima exercitationem libero nam possimus, quisquam sit animi deserunt modi distinctio reprehenderit est eligendi minus vel facere iste, incidunt quis quo.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem cumque culpa modi quasi dolorum, vitae repellat molestiae perferendis doloribus. Iusto porro fuga beatae dolores obcaecati rem natus quas quibusdam ut.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident ducimus blanditiis itaque voluptas? Quo placeat cumque, temporibus neque officiis quibusdam ipsum dolorum quis quisquam optio architecto consequuntur explicabo? Mollitia, at.
                </p>
            </div>
        </article>
    </section>
   </MainLayout>
  )
}

export default ArticleDetailPage
