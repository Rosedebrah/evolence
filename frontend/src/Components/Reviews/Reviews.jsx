import React, { useRef } from 'react'
import './Reviews.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'



const Reviews = () => {


  const slider = useRef(null)
  const tx = useRef(0)

  const slideForward = () => {
    if (tx.current > -100) {
      tx.current -= 25
      slider.current.style.transform = `translateX(${tx.current}%)`
    }
  }

  const slideBackward = () => {
    if (tx.current < 0) {
      tx.current += 25
      slider.current.style.transform = `translateX(${tx.current}%)`
    }
  }

  return (
    <div className='reviews'>
      <img src={next_icon} alt='' className='next-btn' onClick={slideForward} />
      <img src={back_icon} alt='' className='back-btn'onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" />
                        <div>
                            <h3>William Jackson</h3>
                            <span>School Admin, Nairobi</span>
                        </div>
                    </div>
                    <p>Evolence helped us move from paper records and scattered spreadsheets to a clean, digital system we actually understand and use. Reporting is faster, data is more accurate, and our admin team finally feels in control of our operations.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" />
                        <div>
                            <h3>Jane Atieno</h3>
                            <span>Managing Partner, Consulting SME</span>
                        </div>
                    </div>
                    <p>Before working with Evolence, our processes were reactive and time-consuming. The systems they set up gave us clarity on projects, workloads, and reporting. We’ve cut down admin time significantly and now focus more on delivery.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" />
                        <div>
                            <h3>Terry Shikuku</h3>
                            <span>Startup Founder</span>
                        </div>
                    </div>
                    <p>Evolence brought structure where we had ideas but no systems. From MVP design to setting up simple data tracking, everything was clear, fast, and practical. It felt like working with someone who truly understands early-stage chaos.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                        <div>
                            <h3>Brenda Chepkemoi</h3>
                            <span>Operations Lead SME</span>
                        </div>
                    </div>
                    <p>The Excel and data training was hands-on and immediately useful. Nothing felt theoretical. Our team now builds reports confidently and actually uses data in decision-making.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                        <div>
                            <h3>Grace Wairimu</h3>
                            <span>Founder-led Business</span>
                        </div>
                    </div>
                    <p>What stood out about Evolence was the focus on simplicity. They didn’t overcomplicate things—just built systems that worked for our team. The automation alone saved us hours every week.</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Reviews
