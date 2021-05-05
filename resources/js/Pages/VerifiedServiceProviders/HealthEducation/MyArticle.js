import React from 'react'
import Layout from '@/Shared/Layout';


const MyArticle = () => {

    return(
       <>
           <div className="row">
               <div className="col-12">
                   <div className="page-title-box">
                       <h4 className="page-title">Calendar</h4>
                   </div>
               </div>
           </div>
           <div className="card d-block">
               <img className="card-img-top" src="assets/images/small/small-4.jpg" alt="Card image cap"/>
                   <div className="card-body">
                       <h5 className="card-title">Card title</h5>
                       <p className="card-text">This is a longer card with supporting text below as
                           a natural lead-in to additional content. This content is a little
                           bit longer.</p>
                       <p className="card-text">
                           <small className="text-muted">Last updated 3 mins ago</small>
                       </p>
                   </div>
           </div>
       </>
    )
}

MyArticle.layout = page => <Layout children={page} />;

export default MyArticle;
