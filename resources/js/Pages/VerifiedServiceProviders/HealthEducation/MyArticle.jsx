import React from 'react'
import Layout from '@/Shared/Layout';
import {InertiaLink, usePage} from "@inertiajs/inertia-react";


const MyArticle = () => {
    const { articles, status, errors, alertType } = usePage().props

    return(
      <>
          <div className="row">
              <div className="col-12">
                  <div className="page-title-box">
                      <div className="page-title-right">
                              <InertiaLink href={route('health_education.create')} className="btn btn-primary"><i
                                className="uil uil-plus mr-1"/>Create new article
                              </InertiaLink>
                      </div>
                      <h4 className="page-title">My Articles</h4>
                  </div>
              </div>
          </div>

          <div className="row">
              {
               articles && articles.map(article => (
                      <div className="col-lg-4" key={article.id}>
                          <div className="card d-block ribbon-box">
                              <img className="card-img-top" src={article.cover_image} alt="Cover Images" height="210px"/>
                              <div className="card-body">
                                      <div className={`ribbon ribbon-${article.is_published?"Primary": article.request_publication?"Info":"warning"} float-left`}><i
                                      className="mdi mdi-access-point mr-1"/> {article.is_published?"Published": article.request_publication?"Request Publication":"Draft"}
                                  </div>
                                  <h5 className="card-title ribbon-content">{article.title}</h5>
                                  <p className="card-text ribbon-content" dangerouslySetInnerHTML={{__html:article.body.slice(0,90)}}></p>
                                  <div className="card-text">
                                      <small className="text-muted">{article.published_at}</small>
                                      <div className="my-1">
                                          <a href="#" className="btn btn-sm btn-link text-muted pl-0"><i
                                              className="mdi mdi-heart text-danger"/> {article.likes_count} Likes</a>
                                          <a href="#" className="btn btn-sm btn-link text-muted"><i
                                              className="uil uil-comments-alt"/> {article.comments_count} Comments</a>
                                          <a href="#" className="btn btn-sm btn-link text-muted"><i
                                              className="uil uil-share-alt"/> Share</a>
                                      </div>
                                      <div className="my-1">
                                          <InertiaLink href={route('health_education.show', article.id)} className="action-icon font-20 mr-4" title="View"> <i
                                              className="mdi mdi-eye text-primary font-20"/></InertiaLink>
                                          <a href="#" className="action-icon font-20 mr-4" title="Edit"> <i
                                              className="mdi mdi-pencil text-info font-20"/></a>
                                          <a href="#" className="action-icon font-20 mr-4" title="Request Publication"> <i
                                              className="mdi mdi-message-processing-outline text-success"/></a>
                                          <a href="#" className="action-icon font-20 mr-4" title="Delete"> <i
                                              className="mdi mdi-delete text-danger font-20"/></a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  ))
              }

          </div>

      </>
    )
}

MyArticle.layout = page => <Layout children={page} />;

export default MyArticle;
