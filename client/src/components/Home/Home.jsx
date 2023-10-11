import React from 'react'
import './home.css'

const Home = () => {
    return(
        <section className='home'>
            <div className="secContainer container">
                <div className="homeText">
                    <h1 className="title">
                        Plan your wedding with us
                    </h1>
                    <p className="subTitle">
                        รวมสถานที่จัดงานแต่งงานและงานอีเว้นท์ครบวงจร
                    </p>
                </div>

                <div className="homeCard grid">
                    <div className="PriceDiv">
                        <input className='homeInput' type='text' placeholder='  ราคา' pattern='[\d]+'/>
                    </div>

                    <div className="NumDiv">
                        <input className='homeInput' type='text' placeholder='  จำนวนคน' pattern='[\d]{1,3}'/>
                    </div>

                    <button className='btn'>
                        ค้นหา
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Home
