import React, {useState} from 'react'

const App = props => {
	const initialStates = {
		name: '',
		price: 1000
	}

	const [name, setName] = useState(initialStates.name)
	const [price, setPrice] = useState(initialStates.price)
	const reset = () => {
			setName(initialStates.name)
			setPrice(initialStates.price)
	}
	return (
		<>
			<p>現在の{name}は{price}です。</p>
			<button onClick={() => setPrice(price + 1)}>+1</button>
			<button onClick={() => setPrice(price - 1)}>-1</button>
			<button onClick={reset}>Reset</button>
			<input type="text" value={name} onChange={e => setName(e.target.value)} />
		</>
	)
}


export default App
