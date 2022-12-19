//react
import { useContext, useEffect, useState, useRef, useCallback } from "react";
import { Link,useNavigate } from "react-router-dom";
import { UNSAFE_NavigationContext as NavigationContext } from 'react-router-dom';

//css
import styled from "styled-components"


export function useBlocker(blocker, when = true) {
	const { navigator } = useContext(NavigationContext);

	useEffect(() => {
		if(!when) return;
		
		const unblock = navigator.block((tx) => {
			const autoUnblockingTx = {
				...tx,
				retry() {
					unblock();
					tx.retry();
				},
			};
			blocker(autoUnblockingTx);
		});
		return unblock;
	}, [navigator, blocker, when]);
}


export function usePrompt(message, when = true) {
	const blocker = useCallback((tx) => {
		//   eslint-disable-next-line no-alert
		if(window.confirm(message)) tx.retry();
	}, [message]);
	
	useBlocker(blocker, when);
}




// 사용할 컴포넌트
// import { usePrompt } from '../Blocker';

// function MyComponent () {
// 	usePrompt('현재 페이지를 벗어나시겠습니까?', true);

// 	return ( ... );
// }

