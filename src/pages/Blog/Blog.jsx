import React, { useState } from 'react'
import "./Blog.scss";
import TopBtn from "../../components/TopBtn/TopBtn";
import {ArticleCard, ArticleSection, ContactUs} from "../../components/index"
import { blogArray, blogCategories } from './data';
function Blog() {
    const [active, setActive] = useState(0);
    const setActivePage = (id) => {
        setActive(id);
        console.log(id);
    }

    return (
        <>
            <section className="blog">
                <div className="container">
                    <TopBtn text={"BLOG & ARTICLE"} style={"gray"} />
                    <div className="blog__title title">
                        Our latest articles
                    </div>
                    <div className="blog__tab">
                        <ul className="blog__tab--header">
                            {
                                blogCategories.map((category) => (
                                    <li key={category.id} onClick={() => setActivePage(category.id)} className={`${active == category.id ? 'active' : ''}`}>{category.name}</li>
                                ))
                            }
                        </ul>
                        <ul className="blog__tab--panel">
                            {
                                blogArray.map((blog) => {
                                    if (blog.category_id == active) {
                                        return (
                                            <ArticleCard key={blog.id} {...blog} />

                                        )
                                    }
                                })
                            }
                        </ul>
                    </div>
                </div>
            </section>
            <ArticleSection />
            <ContactUs/>
        </>
    )
}

export default Blog