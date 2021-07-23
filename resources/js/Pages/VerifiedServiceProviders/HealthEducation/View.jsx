import React from 'react'
import Layout from "@/Shared/Layout";
import {InertiaLink, usePage} from "@inertiajs/inertia-react"
import Create from "@/Pages/VerifiedServiceProviders/HealthEducation/Create";


const View = () =>{
    const { article } = usePage().props

    return (
        <>
            <div className="row">
                <div className="col-12">
                    <div className="page-title-box">
                        <h4 className="page-title">Article Preview</h4>
                    </div>
                </div>
            </div>
        <div className="card">
            <div className="card-body pb-1">
                <div className="media">
                    <img className="mr-2 rounded" src={article.author.profile_photo_url} alt="Generic placeholder image"
                         height="32"/>
                        <div className="media-body">
                            <div className="dropdown float-right text-muted">
                                <a href="#" className="dropdown-toggle arrow-none card-drop" data-toggle="dropdown"
                                   aria-expanded="false">
                                    <i className="mdi mdi-dots-horizontal"/>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right" >
                                    <a href="#" className="dropdown-item">Edit</a>
                                    <a href="#" className="dropdown-item">Delete</a>
                                </div>
                            </div>
                            <h5 className="m-0">{article.author.name}</h5>
                            <p className="text-muted"><small>{article.created_at}<span className="mx-1">⚬</span>
                                <span>{article.is_published?"Published": article.request_publication?"Request Publication":"Draft"}</span></small></p>
                        </div>
                </div>

                <hr className="m-0"/>

                    <div className="font-16 text-left text-dark my-3">
                        <h3>{article.title}</h3>
                        {article && article.tags.map((tag)=>(
                            <div className="badge badge-secondary mb-3">{tag.name}</div>
                        ))}
                    </div>
                    <div className=" text-justify text-dark my-3" dangerouslySetInnerHTML={{__html:article.body}}>
                            
                    </div>

                    <hr className="m-0"/>

                        <div className="my-1">
                            <a href="#" className="btn btn-sm btn-link text-muted pl-0"><i
                                className="mdi mdi-heart text-danger"/>{article.likes_count} Likes</a>
                            <a href="#" className="btn btn-sm btn-link text-muted"><i
                                 className="uil uil-comments-alt"/>{article.comments_count} Comments</a>
                            <a href="#" className="btn btn-sm btn-link text-muted"><i
                                 className="uil uil-share-alt"/> Share</a>
                        </div>

                        <hr className="m-0"/>

                            <div className="mt-3">
                                <div className="media">
                                    <img className="mr-2 rounded" src={article.cover_image}
                                         alt="Generic placeholder image" height="32"/>
                                        <div className="media-body">
                                            <h5 className="m-0">Sansa Stark </h5>
                                            <p className="text-muted mb-0"><small>2 mins ago</small></p>

                                            <p className="my-1">This is awesome! Proud of sis :) Waiting for you to
                                                come back to winterfall</p>

                                            <div>
                                                <a href="#"
                                                   className="btn btn-sm btn-link text-muted p-0">
                                                    <i className="uil uil-heart mr-1"/> Like
                                                </a>
                                                <a href="#"
                                                   className="btn btn-sm btn-link text-muted p-0 pl-2">
                                                    <i className="uil uil-comments-alt mr-1"/> Reply
                                                </a>
                                            </div>

                                            <div className="media mt-3">
                                                <img className="mr-2 rounded" src={article.cover_image}
                                                     alt="Generic placeholder image" height="32"/>
                                                    <div className="media-body">
                                                        <h5 className="m-0">Cersei Lannister </h5>
                                                        <p className="text-muted mb-0"><small>1 min ago</small></p>

                                                        <p className="my-1">I swear! She won't be able to reach to
                                                            winterfall</p>
                                                    </div>
                                            </div>
                                        </div>
                                </div>
                                <hr/>
                                    <div className="media mb-2">
                                        <img src={article.cover_image}
                                             className="align-self-start rounded mr-2" alt="Arya Stark" height="32"/>
                                            <div className="media-body">
                                                <input type="text" className="form-control border-0 form-control-sm"
                                                       placeholder="Write a comment"/>
                                            </div>
                                    </div>
                            </div>
            </div>
        </div>
        </>
    )
}

View.layout = page => <Layout children={page} />;

export default View;
