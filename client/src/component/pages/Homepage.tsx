// // import './index.css'
// import styled from '@emotion/styled'
// import axios from 'axios'
// import {  useState, useEffect } from 'react';
// import {Link } from "react-router-dom"



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
//   margin-top: 50px;
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
//      margin-top: 50px;
//      background-color: blue;
//      color: white;

// `;
// const Option = styled.option``
// const Select = styled.select`
// height: 60px;
// width: 300px;
// border-radius: 10px;
// outline-color: silver;
// border: 1px solid #dcdce9 ;


// `;
// const Hold = styled.div`
//     display: flex;
//     gap: 10px;

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
   
//    const [country, setCountry] = useState<string> ("")
//    const [language, setLanguage] = useState<string>("")
//    const [headline,setheadline]=useState([])




// const apikey = 'f3721fab517ca51e433ab6ef9eca6e79';
//  const category = 'general';
//  const url = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=${language}&country=${country}&max=10&apikey=${apikey}`;

// //   const Addinfo = () => {
// //     setnewsdata ((prev:any) => [
// //         ...prev,

// //         {
// //             country,
// //             language,
// //         }
// //     ])
// //   }
   
             
//    const getnewquery = async () => {
//       try
//       {
//            await axios
//            .get(url)
//            .then((response) => {
//               console.log(response?.data?.articles)
//               setnewsdata(response?.data?.articles)
//               localStorage.setItem("headline",JSON.stringify(response.data.articles))
//            }).catch((err) => {
//             console.log("this is why data wasnt gotten",err.message)
//            })
//       }catch(err)

//       {
//             throw err
//       }

//    }


// //    useEffect (() => {
// //     const retriveData = JSON.parse(localStorage.getItem("newsData") ||"")
// //     console.log("retire", retriveData)
// //     setnewsdata(retriveData)
// //    }, [] )
// useEffect(()=>{

// const retrievedData=JSON.parse(localStorage.getItem("headline")||'')
// setheadline(retrievedData)

// },[])

//   return (
//       <Container>
//         <h2>NEWS AGGREGATOR TCA</h2>
//         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, tempora doloremque. Exercitationem cum similique nobis, nesciunt perspiciatis pariatur tenetur corporis debitis optio, asperiores, alias excepturi quo voluptate minus natus iste?
//         Exercitationem officia facilis minus molestias cupiditate omnis, dignissimos fugit, magni perferendis atque delectus dicta veniam optio nobis! At perferendis dicta, id praesentium saepe, ratione excepturi quae reprehenderit molestiae commodi quam.</p>

//        <Hold onSubmit={(e) => {
//         e.preventDefault()
//         // Addinfo()
//        }}>
//        <Select  onChange={(e) => {
//         setCountry (e.target.value)
//        }} >
//             <Option selected disabled>
//                 --select country
//             </Option>
//             <Option  value= 'il' >isreal </Option>
//             <Option value='it' >italy </Option>
//             <Option  value= 'no' >Norway </Option>
//             <Option value='au' > Australia </Option>
//             <Option  value='eg' >Egypt </Option>
//             <Option value='in' > india </Option>
//             <Option  value='gr' >Greece </Option>
//             <Option  value='ca' >canada </Option>
//             <Option  value='pe' >peru </Option>


//         </Select>

//         <Select onChange={(e) =>{
//             setLanguage(e.target.value)
//         }}>
//             <Option selected disabled>
//                 --select Language
//             </Option>
//             <Option value='en'> English</Option>
//             <Option value='ar'> Arabic</Option>
//             <Option value='fr'> french</Option>
//             <Option value='el'> hebrew</Option>
//             <Option value='zh'> chinese</Option>
//             <Option value='hi'> hindi</Option>
//             <Option value='it'> italian</Option>
//             <Option value='nl'> dutch</Option>
//         </Select>


//        </Hold>
//        {/* <button type='submit'>Submit</button> */}

//         <Input placeholder = "Search for News" />


//         <Link  to={`/Search`}  >
//         <Button onClick={getnewquery} >search</Button>
//         </Link>
        
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
        
//             {headline?.map((props: propsdata, i:number) => (
//                 <Card  key={i} >
//                 <NewsImage  src= {props.image} />
//                 <div>  {props?.title} </div>
//                <Link to={`/detailed/${i}`} >
//                <div>Read More</div>
//                </Link>
                  
                
//            </Card>


//             ))}
         
//         </CardHold>
//       </Container>
//   )
// }

// export default App














// import { useEffect, useState } from 'react'
import axios from 'axios'
// import './index.css'
import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
// import axios from 'axios'

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

  h2 {
    font-size: 50px;
  }

  p {
    text-align: justify;
    width: 50%;
  }

  h3 {
    font-size: 30px;
  }

`

interface PropsData {
  content: string;
  title: string;
  description: string;
  image: string;
  url: string;
  publishedAt: string;
  source: {
    name: string;
    url: string;
  };


}

const Input = styled.input`
  width: 500px;
  height: 70px;
  padding-left: 20px;
`

const Card = styled.div`
  height: 250px;
  width: 300px;
  border: 1px solid gray;
  border-radius: 5px;
`

const CardHold = styled.div`
  padding-left: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  align-items: center;
`

const NewsCat = styled.div`
  font-size: 40px;
  font-weight: bold;
  display: flex;
  gap: 20px;
`

const NewsCard = styled.div`
  height: 150px;
  width: 300px;
  border: 1px solid gray;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const NewsImage = styled.img`
  height: 120px;
  width: 100%;
  object-fit: cover;
`

const ContainerNews = styled.div`
  width: 80%;
  height: 30vh;
  display: flex;
  flex-direction: column;
  
`

const Select = styled.select`
  width: 13%;
  height: 20%;
  border: 1px solid black;
  border-radius: 5px;

    option{

    }
`


function App() {

  const [NewsData, setNewsData] = useState([])

  // generated api key from gnews.io
  // const apikey = '14115d7eea6143788382e6b957d4dc1d';

const  apikey = '14115d7eea6143788382e6b957d4dc1d';
const category = 'general';
const url = 'https://gnews.io/api/v4/top-headlines?category=' + category + '&lang=en&country=us&max=10&apikey=' + apikey;

  // the url (location of where the apikey is coming from)
  // const url = https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=${apikey};

  // if u want to call an api you must always declare a function
  // async - ability to be able to try and catch error in an api

  // get method accept one or two parameter and one of the parameter it takes is the (URL)

  // .THEN RETUNS SUCCESSFUL results -

  // useEffect make updates and changes

  const GetNewsQuery = async() => {

    try {

      await axios.get(url)
      .then((response:any) => {
        console.log(response?.data?.articles)
        setNewsData(response?.data?.articles)

      })
      .catch((err:any) => {
        console.log(err)
      });

    } catch(err){
       console.log(err)
    }
  }


  // the empty array in the useEffect block means that the result should run once
    // useEffect(() => {
    //   GetNewsQuery()
    // }, []);



  return (
      <Container>
        <h2>NEWS AGGREGATOR TCA</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, tempora doloremque. Exercitationem cum similique nobis, nesciunt perspiciatis pariatur tenetur corporis debitis optio, asperiores, alias excepturi quo voluptate minus natus iste?
        Exercitationem officia facilis minus molestias cupiditate omnis, dignissimos fugit, magni perferendis atque delectus dicta veniam optio nobis! At perferendis dicta, id praesentium saepe, ratione excepturi quae reprehenderit molestiae commodi quam.</p>

      <ContainerNews>
        <Select>
          <option selected disabled>Select Country</option>
          <option>Arabic</option>
          <option>Arabic</option>
          <option>Arabic</option>
          <option>Arabic</option>
          <option>Arabic</option>
          <option>Arabic</option>
        </Select>
      <Input
        placeholder = "Search for News" />

        <button>Search</button>
      </ContainerNews>
        
        <h3>Our Diffferent News Source</h3>

        <NewsCat>
          <NewsCard>BBC</NewsCard>
          <NewsCard>GOGGLE</NewsCard>
          <NewsCard>BING</NewsCard> 
          <NewsCard>PUNCH</NewsCard>
        </NewsCat>
        <br />
        <br />
        <br />

        <h3>Top Headline News</h3>

        <CardHold>
        
            {
              NewsData?.map((news: PropsData, i: number) => (
                <Card key={i}>
                <NewsImage src={news?.image} />
                <div>{news?.title}</div>
                <a href={news?.url}>
                  <div>Read More</div>
                </a>
              </Card>
              ))
            }
         
        </CardHold>
      </Container>
  )
}

export default App