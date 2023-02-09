import React, { useState, useEffect } from "react"
import styles from "../styles/Quiz.module.css";

const Quiz = () => {
	const [location, setlocation] = useState('')
	const [adults, setadults] = useState(0)
	const [kids, setkids] = useState(0)
	const [pets, setpets] = useState("")
	const [length, setlength] = useState("")
	const [budget, setbudget] = useState("$")
	const [girlTrip, setgirlTrip] = useState(false)
	const [whiteLotus, setwhiteLotus] = useState(false)
	const [offTheGrid, setoffTheGrid] = useState(false)
	const [spa, setspa] = useState(false)
	const [honeymoon, sethoneymoon] = useState(false)
	const [babymoon, setbabymoon] = useState(false)
	const [workTrip, setworkTrip] = useState(false)
	const [anniversary, setanniversary] = useState(false)
	const [familyTrip, setfamilyTrip] = useState(false)
	const [sport, setsport] = useState(false)
	const [shopping, setshopping] = useState(false)
	const [adventure, setadventure] = useState(false)
	const [music, setmusic] =useState(false)
	const [remote, setremote] =useState(false)

	return (
		<div className={styles.ques}>
			<div className={styles.questions}>
				<h3>Destination:</h3>
				<div className={styles.checkAny}>
      		<input type="checkbox" id="anywhere" name="anywhere" />
      		<label htmlFor="anywhere">Anywhere</label>
    		</div>
    		<div className={styles.drops}>
      		<input type="text" id="city" name="city" placeholder="Specific Destination" value={location} onChange={(e) => setlocation(e.target.value)} />
    		</div>
			</div>

			<div className={styles.questions}>
				<h3>Length:</h3>
    		<div className={styles.drops}>
	    		<input type="text" id="length" name="length" placeholder="Trip length" value={length} onChange={(e) => setlength(e.target.value)} />
    		</div>
    		{/*<div className={styles.checkAny}>
      		<input type="checkbox" id="weekend" name="weekend" />
      		<label htmlFor="weekend">Weekend Trip</label>
    		</div>*/}
			</div>

			<div className={styles.questions}>
				<h3>Guests:</h3>
    		<div className={styles.plusminus}>
	    		<button className={styles.minus} onClick={() => {
	    			adults > 0 ? setadults(adults - 1) : setadults(0)}}>-</button>
	    		<p>{adults} Adults <br/> <span>(18+)</span></p>
      		<button className={styles.plus} onClick={() => setadults(adults + 1)}>+</button>
    		</div>
    		<div className={styles.plusminus}>
	    		<button className={styles.minus} onClick={() => {
	    			kids > 0 ? setkids(kids - 1) : setkids(0)}}>-</button>
	    		<p>{kids} Kids <br/> <span>(0 - 17)</span></p>
      		<button className={styles.plus} onClick={() => setkids(kids + 1)}>+</button>
    		</div>
    		<div className={styles.plusminus} >
	    		<button className={styles.noPets} onClick={() => setpets("no")}>No</button>
	    		<p>Pets <br/> <span>{pets}</span></p>
      		<button className={styles.yesPets} onClick={() => setpets("yes")}>Yes</button>
    		</div>
			</div>

			<div className={styles.questions}>
				<h3>Budget:</h3>
				<div className={styles.checkAny}>
      		<input type="checkbox" id="budget" name="budget" onChange={() => setbudget("$")} />
      		<label className={styles.budget} htmlFor="budget">$<span>$$</span></label>
    		</div>
    		<div className={styles.checkAny}>
      		<input type="checkbox" id="budget" name="budget" onChange={() => setbudget("$$")} />
      		<label className={styles.budget} htmlFor="budget">$$<span>$</span></label>
    		</div>
    		<div className={styles.checkAny}>
      		<input type="checkbox" id="budget" name="budget" onChange={() => setbudget("$$$")} />
      		<label className={styles.budget} htmlFor="budget">$$$</label>
    		</div>
			</div>

			<div className={styles.questions}>
				<h3>Extra:</h3>
				<div className={styles.extras}>
					<div>
						<input type="checkbox" className={`btn-check ${girlTrip}`} id="btn-girl-trip" value={girlTrip} onChange={() => setgirlTrip(!girlTrip)} autoComplete="off" />
						<label className={styles.exbtn} htmlFor="btn-girl-trip">Girl&#39;s Trip</label>
					</div>

					<div>
						<input type="checkbox" className={`btn-check ${whiteLotus}`} id="btn-whiteLotus" value={whiteLotus} onChange={() => setwhiteLotus(!whiteLotus)} autoComplete="off" />
						<label className={styles.exbtn} htmlFor="btn-whiteLotus">White lotus</label>
					</div>

					<div>
						<input type="checkbox" className={`btn-check ${spa}`} id="btn-spa" value={spa} onChange={() => setspa(!spa)} autoComplete="off" />
						<label className={styles.exbtn} htmlFor="btn-spa">Spa</label>
					</div>

					<div>
						<input type="checkbox" className={`btn-check ${offTheGrid}`} id="btn-offTheGrid" value={offTheGrid} onChange={() => setoffTheGrid(!offTheGrid)} autoComplete="off" />
						<label className={styles.exbtn} htmlFor="btn-offTheGrid">Off the grid</label>
					</div>

					<div>
						<input type="checkbox" className={`btn-check ${honeymoon}`} id="btn-honeymoon" value={honeymoon} onChange={() => sethoneymoon(!honeymoon)} autoComplete="off" />
						<label className={styles.exbtn} htmlFor="btn-honeymoon">Honeymoon</label>
					</div>

					<div>
						<input type="checkbox" className={`btn-check ${babymoon}`} id="btn-babymoon" value={babymoon} onChange={() => setbabymoon(!babymoon)} autoComplete="off" />
						<label className={styles.exbtn} htmlFor="btn-babymoon">Babymoon</label>
					</div>

					<div>
						<input type="checkbox" className={`btn-check ${workTrip}`} id="btn-workTrip" value={workTrip} onChange={() => setworkTrip(!workTrip)} autoComplete="off" />
						<label className={styles.exbtn} htmlFor="btn-workTrip">Business Trip</label>
					</div>

					<div>
						<input type="checkbox" className={`btn-check ${anniversary}`} id="btn-anniversary" value={anniversary} onChange={() => setanniversary(!anniversary)} autoComplete="off" />
						<label className={styles.exbtn} htmlFor="btn-anniversary">Anniversary</label>
					</div>

					<div>
						<input type="checkbox" className={`btn-check ${sport}`} id="btn-sport" value={sport} onChange={() => setsport(!sport)} autoComplete="off" />
						<label className={styles.exbtn} htmlFor="btn-sport">Event/Sports</label>
					</div>

					<div>
						<input type="checkbox" className={`btn-check ${familyTrip}`} id="btn-familyTrip" value={familyTrip} onChange={() => setfamilyTrip(!familyTrip)} autoComplete="off" />
						<label className={styles.exbtn} htmlFor="btn-familyTrip">Family Time</label>
					</div>

					<div>
						<input type="checkbox" className={`btn-check ${shopping}`} id="btn-shopping" value={shopping} onChange={() => setshopping(!shopping)} autoComplete="off" />
						<label className={styles.exbtn} htmlFor="btn-shopping">Luxury Shopping</label>
					</div>

					<div>
						<input type="checkbox" className={`btn-check ${adventure}`} id="btn-adventure" value={adventure} onChange={() => setadventure(!adventure)} autoComplete="off" />
						<label className={styles.exbtn} htmlFor="btn-adventure">New Adventure</label>
					</div>

					<div>
						<input type="checkbox" className={`btn-check ${music}`} id="btn-music" value={music} onChange={() => setmusic(!music)} autoComplete="off" />
						<label className={styles.exbtn} htmlFor="btn-music">music festivals</label>
					</div>

					<div>
						<input type="checkbox" className={`btn-check ${remote}`} id="btn-remote" value={remote} onChange={() => setremote(!remote)} autoComplete="off" />
						<label className={styles.exbtn} htmlFor="btn-remote">Remote Worker</label>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Quiz