
import React from 'react';

export default function Hero(){

    return(
        <> 
<section id='home'>
        <div className=' bg-[#F2F0F1] flex flex-col lg:flex-row w-full h-auto lg:h-[663px]  px-4 lg:px-[100px]' >
           <div className=' bg-[#F2F0F1] w-full lg:w-1/2 h-auto lg:h-[663px]  p-6 lg:p-8 '>
           
            <div className=' w-full lg:w-[577px] ' >
                <h1 className=' text-[44px] lg:text-[64px] font-extrabold font-sans leading-tight' >FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                <p className='mt-4 lg:mt-5 text-sm lg:text-base'>Browse through our diverse range of meticulously crafted garments,
                 designed to bring out your individuality and cater to your sense of style.</p>
                 <button className=' mt-5 w-full lg:w-[210px]  h-[52px] rounded-md text-white bg-black' >Shop Now</button>

                <div className='flex flex-wrap lg:flex-nowrap w-full  lg:w-[569px] mt-6 
                 lg:mt-8 justify-center items-center ' >
                    <div className='p-4'><h1 className=' text-[40px] font-bold' >200+</h1>
                    <p  >International Brands</p>
                    </div>
                    <div className='p-4 ' ><h1 className='  text-[40px] font-bold' >2,000+</h1>
                    <p>Highe Quelity Product</p>
                    </div>
                    <div className='p-4' ><h1 className='  text-[40px] font-bold'  >30,000+</h1>
                    <p>Happy Customers</p>
                    </div>
                    
                </div>
            
            </div>

           </div>
           <div className="flex items-center justify-center w-full lg:w-1/2 h-auto lg:h-[663px] p-6 bg-[url('/image/logo.png')] bg-contain bg-center bg-no-repeat">
 
 <div className=' relative w-full lg:w-[360px] h-auto lg:h-[663px]   ' > <img
    src="/image/logo2.png"
    alt="Centered Logo"
    className="mt-0 ml-0 md:ml-64  lg:mt-64 lg:ml-12  w-[44px] h-[44px]  lg:w-[56px] lg:h-[56px]   z-10  animate-spin rounded-full "
  />
  </div>
  
  
  <div className=' relative w-full lg:w-[360px] h-auto lg:h-[663px]   mb-40 ml-12 lg:mb-0 lg:ml-0' ><img
    src="/image/logo2.png"
    alt="Centered Logo"
    className=" ml-10  mt-0 mb-12 lg:mb-0  lg:ml-24  lg:mt-16   w-[76px] lg:w-[104px] h-[76px] lg:h-[104px] z-10 animate-spin rounded-full"
  />
  </div>

</div>

        </div>
</section>


<section id="arrivals">
  <div className="flex justify-center items-center flex-wrap w-full bg-black">
    <img src="/image/varsa.png" alt="sale logo" className="p-3 sm:p-6 lg:p-12 " />
    <img src="/image/zara.png" alt="sale logo" className="p-3 sm:p-6 lg:p-12" />
    <img src="/image/gucci.png" alt="sale logo" className="p-3 sm:p-6 lg:p-12" />
    <img src="/image/prada.png" alt="sale logo" className="p-3 sm:p-6 lg:p-12" />
    <img src="/image/calvin.png" alt="sale logo" className="p-3 sm:p-6 lg:p-12" />
  </div>

  <div className="w-full lg:w-[1440px] h-auto lg:h-[663px] ">
    <div>
      <h1 className="font-sans font-extrabold mt-6 lg:mt-12 text-center text-[24px] sm:text-[28px] lg:text-[48px]">
        NEW ARRIVALS
      </h1>
    </div>

    <div className="flex justify-center items-center flex-wrap w-full lg:w-[1440px] h-auto ">
      {[
        {
          image: "/image/t-shirt1.png",
          title: "T-shirt Tape Details",
          price: "$120",
        },
        {
          image: "/image/jeans.png",
          title: "Skinny Fit Jeans",
          price: "$240",
          discountPrice: "$260",
          discount: "-20%",
        },
        {
          image: "/image/shirt.png",
          title: "Checkered Shirt",
          price: "$180",
        },
        {
          image: "/image/t-shirt1.png",
          title: "Sleeve Striped T-shirt",
          price: "$130",
          discountPrice: "$160",
          discount: "-30%",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="w-[200px] sm:w-[235px] lg:w-[296px] h-auto m-2 lg:m-5 "
        >
          <div>
            <img
              src={item.image}
              alt={item.title}
              className="w-[200px] h-[200px] sm:w-[220px] sm:h-[220px] lg:w-[295px] lg:h-[298px] transform hover:scale-110 transition duration-500 ease-out "
            />
          </div>
          <h1 className="mt-4 text-[16px] sm:text-[18px] lg:text-[20px] font-sans font-bold">
            {item.title}
          </h1>
          <img src="/image/rating.png" alt="rating" />
          <div className="flex items-center">
            <h1 className="text-[16px] sm:text-[18px] lg:text-[20px] font-sans font-bold">
              {item.price}
              {item.discountPrice && (
                <span className="text-sm sm:text-base text-gray-500 line-through ml-2">
                  {item.discountPrice}
                </span>
              )}
            </h1>
            {item.discount && (
              <div className="ml-2 text-center w-[48px] sm:w-[58px] h-[20px] sm:h-[28px] bg-[#ffebeb] text-xs sm:text-sm text-[#ff3333]">
                {item.discount}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>

    <div className="flex justify-center items-center mt-6">
      <button className="w-[180px] sm:w-[218px] h-[40px] sm:h-[52px] bg-white text-black rounded">
        View All
      </button>
    </div>
  </div>
</section>



<section id='top-selling' >



<div className='w-full lg:w-[1440px] h-auto lg:h-[663px]   ' >
<div><h1 className='font-sans font-extrabold mt-6 lg:mt-12 text-center text-[24px] sm:text-[28px] lg:text-[48px] ' >TOP SELLING</h1></div>

<div className='flex justify-center items-center flex-wrap w-full lg:w-[1440px] h-auto  ' >
  <div className='w-[235px] h-auto m-2  lg:m-5 lg:w-[296px] lg:h-[444px] ' >
    <div><img src="/image/cloth1.png" alt="" className='w-[200px] h-[200x]  lg:w-[295px] lg:h-[298px] transfrom hover:scale-110 transition duration-500 ease-out' /></div>
  <h1 className='mt-5 sm:text-[18px] lg:text-[20px] font-sans font-bold' >Virtical Striped Shirt</h1>
  <img src="/image/rating.png" alt="rating" />
  <div className='flex ' ><h1 className='   sm:text-[18px] lg:text-[20px] font-sans font-bold' >$212  
    <span className="sm:text-[18px] lg:text-xl text-gray-500 line-through"> $232</span>
  </h1>
  <div className='text-center mt-1 ml-2 w-[30px] h-[15px] lg:w-[58px] lg:h-[28x] bg-[#ffebeb] text-sm text-[#ff3333] '> -20%</div>
  
  </div>
  </div>

  <div className='w-[235px] h-auto m-2  lg:m-5 lg:w-[296px] lg:h-[444px]  ' >
  <div><img src="/image/cloth2.png" alt="" className='w-[200px] h-[200x]  lg:w-[295px] lg:h-[298px] transfrom hover:scale-110 transition duration-500 ease-out' /></div>
  <h1 className='mt-5 sm:text-[18px] lg:text-[20px] font-sans font-bold' >Courage Grahic T-shirt</h1>
  <img src="/image/rating.png" alt="rating" />
  
  <h1 className=' sm:text-[18px] lg:text-[20px] font-sans font-bold ' >$145 
  </h1>
  
  </div>

  <div className= ' w-[235px] h-auto m-2  lg:m-5 lg:w-[296px] lg:h-[444px]  ' >
  <div><img src="/image/cloth3.png" alt="" className='w-[200px] h-[200x]  lg:w-[295px] lg:h-[298px] transfrom hover:scale-110 transition duration-500 ease-out' /></div>
  <h1 className='mt-5 sm:text-[18px] lg:text-[20px] font-sans font-bold' >Loose Fit Bermuda Shorts</h1>
  <img src="/image/rating.png" alt="rating"  />
  <h1 className='sm:text-[18px] lg:text-[20px] font-sans font-bold' >$80</h1>
  </div>

  <div className=' w-[235px] h-auto m-2 lg:m-5 lg:w-[296px] lg:h-[444px]  ' >
    <div><img src="/image/cloth4.png" alt="" className='w-[200px] h-[200x]  lg:w-[295px] lg:h-[298px] transfrom hover:scale-110 transition duration-500 ease-out' /></div>
    <h1 className=' mt-5 sm:text-[18px] lg:text-[20px] font-sans font-bold' >Faded Skinny Jeans </h1>
  <img src="/image/rating.png" alt="rating" />
  <h1 className='sm:text-[18px] lg:text-[20px] font-sans font-bold' >$210</h1>
  
</div>

</div>
<div className='flex justify-center items-center' ><button className='w-[218px] h-[52px] text-black'  >View All</button></div>

</div>

</section>






<section id='browse'>

  <div  className='flex justify-center items-center flex-wrap w-full lg:w-[1440px] h-auto lgh-[866px] ' >
  
  <div className=' w-full lg:w-[1240px]   h-auto lg:h-[866px] bg-[#F0F0F0] rounded-lg' >
 
  <div><h1 className='font-sans font-extrabold mt-12 text-center text-[36px] lg:text-[48px]' >BROWSE BY DRESS STYLE</h1></div>

  <div className="flex flex-wrap justify-center items-center mt-24 ">
  <img src="/image/casual.png" alt="cloth-pic" className=" p-4 lg:p-p4  block w-[407px] h-[289px]" />
  <img src="/image/formal.png" alt="cloth-pic" className=" p-4  lg:p-p4 block w-[684px] h-[289px]" />
  <img src="/image/party.png" alt="cloth-pic" className="p-4  lg:p-p4 block w-[684px] h-[289px]" />
  <img src="/image/gym.png" alt="cloth-pic" className="p-4  lg:p-p4 block w-[407px] h-[289px]" />
</div>


  </div>
</div>
</section>




<section>

<div className='w-[1440px] h-[500px] ' >
  
<div className='ml-10 lg:ml-[100px]' ><h1 className=' font-sans font-extrabold mt-12  text-2xl lg:text-[48px]' >OUR HAPPY CUSTOMERS</h1></div>


<div className='flex' >
<div className='ml-10 lg:ml-[100px] w-[336px]  h-[300] p-6 mt-12 ' >
<img src="/image/stars.png" alt="" className=''/>
<h1 className='text-[20px] font-sans font-bold mt-4'>Sarah M. <i className="fa-regular fa-circle-check bg-[#20B54A] rounded-full"></i></h1> 
<p className='mt-4 text-[16px] font-sans'>"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses,
   every piece I've bought has exceeded my expectations.”</p>
</div>


<div className='ml-[100px] w-[336px]  h-[300] p-6 mt-12 ' >
<img src="/image/stars.png" alt="" className=''/>
<h1 className='text-[20px] font-sans font-bold mt-4'>Alex K. <i className="fa-regular fa-circle-check bg-[#20B54A] rounded-full"></i></h1> 
<p className='mt-4 text-[16px] font-sans'>"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co.
   The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”</p>
</div>

<div className='ml-[100px] w-[336px]  h-[300] p-6 mt-12 ' >
<img src="/image/stars.png" alt="" className=''/>
<h1 className='text-[20px] font-sans font-bold mt-4'>James L. <i className="fa-regular fa-circle-check bg-[#20B54A] rounded-full"></i></h1> 
<p className='mt-4 text-[16px] font-sans'>"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co.
   The selection of clothes is not only diverse but also on-point with the latest trends.”</p>
</div>

</div>


</div>
</section>



<section className=' w-full h-auto mt-32 lg:w-[1440px]' >
<div className='bg-[#F0F0F0] relative ' >


<div className='  absolute top-[-90px] left-1/2 transform -translate-x-1/2 z-10 w-full' >
<div className=' p-8 flex flex-col lg:flex-row justify-between items-center w-full max-w-[1240px] h-auto lg:h-[180px] rounded-2xl bg-black mx-auto' >

   <div className='w-full lg:w-[551px] mb-4 lg:mb-0 ' >
    <h1 className='text-white font-extrabold font-sans text-[28px] lg:text-[40px] text-center lg:text-left'>
    STAY UPTO DATE ABOUT OUR LATEST OFFERS
  </h1>
</div>

<div className='w-full lg:w-[349px] '>
<input type="text"  placeholder=' ✉ Enter your email address' className='w-full h-[48px] rounded-2xl px-4'/>
<button className='mt-4 bg-[#ffff] w-full h-[46px] rounded-2xl'>Subscribe to Newsletter</button>
</div>
</div>
</div>

<div className=" flex flex-wrap justify-center items-center w-full h-auto pt-16 px-4">
  <div className=" mt-40 lg:mt-24  flex flex-wrap justify-between items-start p-6 sm:p-8 w-full max-w-[1240px] h-auto space-y-8 lg:space-y-0">
    {/* SHOP.CO Section */}
    <div className="w-full sm:w-[60%] md:w-[40%] lg:w-[248px] mb-4 lg:mb-0">
      <h1 className="text-[24px] md:text-[28px] lg:text-[34px] font-extrabold font-sans">
        SHOP.CO
      </h1>
      <p className="mt-4 text-sm">
        We have clothes that suit your style and which you’re proud to wear.
        From women to men.
      </p>
      <div className="mt-4 flex space-x-4 text-lg">
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-github"></i>
      </div>
    </div>
    {/* COMPANY Section */}
    <div className="w-1/2 sm:w-1/3 md:w-[20%] lg:w-[104px] mb-4 lg:mb-0">
      <h1 className="text-[18px] font-sans font-bold">COMPANY</h1>
      <ul className="mt-4 space-y-2 text-sm">
        <li><a href="#">About</a></li>
        <li><a href="#">Features</a></li>
        <li><a href="#">Works</a></li>
        <li><a href="#">Career</a></li>
      </ul>
    </div>
    {/* HELP Section */}
    <div className="w-1/2 sm:w-1/3 md:w-[20%] lg:w-[148px] mb-4 lg:mb-0">
      <h1 className="text-[18px] font-sans font-bold">HELP</h1>
      <ul className="mt-4 space-y-2 text-sm">
        <li><a href="#">Customer Support</a></li>
        <li><a href="#">Delivery Details</a></li>
        <li><a href="#">Terms & Conditions</a></li>
        <li><a href="#">Privacy Policy</a></li>
      </ul>
    </div>
    {/* FAQ Section */}
    <div className="w-1/2 sm:w-1/3 md:w-[20%] lg:w-[149px] mb-4 lg:mb-0">
      <h1 className="text-[18px] font-sans font-bold">FAQ</h1>
      <ul className="mt-4 space-y-2 text-sm">
        <li><a href="#">Account</a></li>
        <li><a href="#">Manage Deliveries</a></li>
        <li><a href="#">Orders</a></li>
        <li><a href="#">Payments</a></li>
      </ul>
    </div>
    {/* RESOURCES Section */}
    <div className="w-1/2 sm:w-1/3 md:w-[20%] lg:w-[149px]">
      <h1 className="text-[18px] font-sans font-bold">RESOURCES</h1>
      <ul className="mt-4 space-y-2 text-sm">
        <li><a href="#">Free eBooks</a></li>
        <li><a href="#">Development Tutorial</a></li>
        <li><a href="#">How-to Blog</a></li>
        <li><a href="#">YouTube Playlist</a></li>
      </ul>
    </div>
  </div>
</div>

<div className=' w-full flex justify-center items-center lg:w-[1440px] lg:h-[2px] mt-10 '>
<div className='  opacity-40 w-56 flex-wrap lg:w-[1240px] border-2 border-black '  ></div>

</div>

<div className=' flex justify-center items-center  w-full lg:w-[1440px]' >
<div className='  flex-wrap justify-center flex lg:justify-between  items-center w-full h-auto lg:w-[1240px] lg:h-[100px]' >

  <p className='mt-8 text-xs lg:text-sm  text-center' >Shop.co © 2000-2023, All Rights Reserved by syed zohaib shah</p>
      <img src="/image/footer.png" alt="footer" className=' justify-center items-center lg:w-[281px] lg:h-[30px] mt-6' />
</div>
</div>

</div>
</section>


         </>
         
)
         
}
