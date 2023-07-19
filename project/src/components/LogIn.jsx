// import React, { useEffect, useRef, useState } from 'react';
// import styled from 'styled-components';

// function LogIn() {
//     const [logInModal, setLogInModal] = useState(false);
//     const loginModalRef = useRef(null);

//     const openLogInModal = () => {
//         setLogInModal(true);
//     };

//     const closeLogInModal = () => {
//         setLogInModal(false);
//     };

//     const handleOutsideLogInClick = (e) => {
//         if (
//             loginModalRef.current &&
//             !loginModalRef.current.contains(e.target)
//         ) {
//             closeLogInModal();
//         }
//     };

//     useEffect(() => {
//         if (logInModal) {
//             document.addEventListener('mousedown', handleOutsideLogInClick);
//         } else {
//             document.removeEventListener('mousedown', handleOutsideLogInClick);
//         }

//         return () => {
//             document.removeEventListener('mousedown', handleOutsideLogInClick);
//         };
//     }, [logInModal]);

//     return (
//         <div>
//             <StLogInButton onClick={openLogInModal}>
//                 {'Log In'}
//                 {logInModal && (`
//                     <LoginModalOverlay
//                         ref={loginModalRef}
//                         onClick={handleOutsideLogInClick}
//                     >
//                         <LogInBackground>
//                             <StLogInPage>
//                                 <p>{'Log In'}</p>
//                                 <StLoginContainer>
//                                     <LoginInput>
//                                         <input />
//                                         <input />
//                                     </LoginInput>
//                                     <LogInButton>{'Submit'}</LogInButton>
//                                 </StLoginContainer>
//                             </StLogInPage>
//                         </LogInBackground>
//                     </LoginModalOverlay>
//                 )}
//             </StLogInButton>
//         </div>
//     );
// }

// export default LogIn;

// const StLogInPage = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     flex-direction: column;
// `;

// const StLoginContainer = styled.div`
//     display: flex;
//     gap: 2rem;
// `;

// const LoginInput = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     flex-direction: column;
//     gap: 1rem;
// `;

// const StLogInButton = styled.button`
//     width: 9rem;
//     height: 4rem;
//     border: none;
//     border-radius: 0.8rem;
//     background-color: #90e2e2;
// `;

// const LoginModalOverlay = styled.div`
//     z-index: 11;
//     position: fixed;
//     top: 0;
//     left: 0;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     background-color: rgba(0, 0, 0, 0.8);
//     width: 100%;
//     height: 100%;
// `;

// const LogInButton = styled.button``;

// const LogInBackground = styled.div`
//     display: flex;
//     flex-direction: column;
//     padding: 1.5rem;
//     border-radius: 0.8rem;
//     background-color: #fff;
//     width: 30%;
//     height: 60%;
// `;
