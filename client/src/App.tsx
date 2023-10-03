
// import './index.css'
// import styled from '@emotion/styled'
// import axios from 'axios'
// import {  useState } from 'react';
// import {  TwitterShareButton } from "react-share"


// const Container = styled.div`
//     display: flex;
//     justify-content: center;
//     flex-direction: column;
//     align-items: center;

//   h2 {
//     font-size: 50px;
//   }

//   p {
//     text-align: center;
//   }

//   h3 {
//     font-size: 30px;
//   }

// `;

// const Input = styled.input`
//   width: 500px;
//   height: 70px;
//   padding-left: 20px;
// `;

// const Card = styled.div`
//   height: 200px;
//   width: 300px;
//   border: 1px solid gray;
//   border-radius: 5px;
// `;

// const CardHold = styled.div`
//   padding-left: 20px;
//   display: flex;
//   flex-wrap: wrap;
//   gap: 10px;
//   justify-content: center;
//   align-items: center;
// `;

// const NewsCat = styled.div`
//   font-size: 40px;
//   font-weight: bold;
//   display: flex;
//   gap: 20px;
// `;

// const NewsCard = styled.div`
//   height: 150px;
//   width: 300px;
//   border: 1px solid gray;
//   border-radius: 5px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const NewsImage = styled.img`
//   height: 100px;
//   width: 100%;
//   object-fit: cover;
// `;

// const Button = styled.button`
//      border: 1px soild ;
//      margin-top: 30px;
//      background-color: blue;
//      color: white;

// `;
// interface propsdata{
//   content: string;
//   title:string;
//   description: string;
//   image:string;
//   url:string;
//   publishedAt: string;
//   source: {
//     name: string;
//     url: string;
//   };
// }

// function App() {

//   const [newsdata, setnewsdata] = useState ([])
//    const [search , setsearch] = useState("")


//   const apikey = 'f3721fab517ca51e433ab6ef9eca6e79';
//     const url = `https://gnews.io/api/v4/search?q=${search}&lang=en&country=us&max=10&apikey=${apikey}`;

       

   
             
//    const getnewquery = async () => {
//       try
//       {
//            await axios
//            .get(url)
//            .then((response) => {
//               console.log(response?.data?.articles)
//               setnewsdata(response?.data?.articles)
//            }).catch((err) => {
//             console.log(err)
//            })
//       }catch(err)

//       {
//             throw err
//       }

//    }


//   //  useEffect (() => {
//   //   getnewquery();
//   //  },[] )

//   return (
//       <Container>
//         <h2>NEWS AGGREGATOR TCA</h2>
//         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, tempora doloremque. Exercitationem cum similique nobis, nesciunt perspiciatis pariatur tenetur corporis debitis optio, asperiores, alias excepturi quo voluptate minus natus iste?
//         Exercitationem officia facilis minus molestias cupiditate omnis, dignissimos fugit, magni perferendis atque delectus dicta veniam optio nobis! At perferendis dicta, id praesentium saepe, ratione excepturi quae reprehenderit molestiae commodi quam.</p>

//         <Input  onChange={(e) => {
//           setsearch(e.target.value)
//         }}
//         placeholder = "Search for News" />


//         <Button onClick={getnewquery} >search</Button>
        
//         <h3>Our Diffferent News Source</h3>

//         <NewsCat>
//           <NewsCard>BBC</NewsCard>
//           <NewsCard>GOGGLE</NewsCard>
//           <NewsCard>BING</NewsCard> 
//           <NewsCard>PUNCH</NewsCard>
//         </NewsCat>
//         <br />
//         <br />
//         <br />

//         <h3>Current News Headlines</h3>

//         <CardHold>
        
//             {newsdata?.map((props: propsdata, i:number) => (
//                 <Card  key={i} >
//                 <NewsImage  src= {props.image} />
//                 <div>  {props?.title} </div>
//                <a href= {props?.title}  >
//                   <div>Read More</div>
//                   <TwitterShareButton content = 'news for today' url={props?.url} >

//                     share
//                   </TwitterShareButton>
//                 </a>
//            </Card>


//             ))}
         
//         </CardHold>
//       </Container>
//   )
// }

// export default App


import React from 'react'

const App = () => {
  return (
    <div>App</div>
  )
}

export default App