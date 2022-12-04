import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import CourseService from "../services/auth.service";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  // let [courseData, setCourseData] = useState(null);
  // useEffect(() => {
  //   CourseService.getCourseByName("Article1")
  //     .then((data) => {
  //       console.log(data);
  //       setCourseData(data.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3500')
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  // let [courseData, setCourseData] = useState(null);
  // useEffect(() => {
  //   CourseService.getCourseByName("Article")
  //     .then((data) => {
  //       console.log(data);
  //       setCourseData(data.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  return (
    <div className="Home">
      {/* <div>
        <p>Here's the data we got back from server.</p>
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h1 className="card-title">Article1</h1>
            <p>by Jack</p>
            <p className="card-text">135135351351355555553535135135115</p>
            <br />
            <Link to="/Article">next</Link>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h1 className="card-title">Article1</h1>
            <p>by Jack</p>
            <p className="card-text">135135351351355555553535135135115</p>
            <br />
            <Link to="/Article">next</Link>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h1 className="card-title">Article1</h1>
            <p>by Jack</p>
            <p className="card-text">135135351351355555553535135135115</p>
            <br />
            <Link to="/Article">next</Link>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h1 className="card-title">Article1</h1>
            <p>by Jack</p>
            <p className="card-text">135135351351355555553535135135115</p>
            <br />
            <Link to="/Article">next</Link>
          </div>
        </div> */}
      {/* {courseData.map((course) => (
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">{course.title}</h5>
              <p className="card-text">{course.description}</p>
              <br />
            </div>
          </div>
        ))} */}
      {/* </div> */}
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <div class="container">
              <ul>
                {posts.map((post) => (
                  <li key={post.id}>
                    <div class="square">
                      <h1>Article{post.id}</h1>
                      <hr />
                      <h4 class="content">By {post.name}</h4>
                      <hr />
                      <br />
                      <div class="content">{post.title}</div>
                      <hr />
                      
                      <br />
                      <Link to={`/Article/${post.id}`}>next</Link>
                      
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
