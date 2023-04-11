// import React from 'react';
// import Image from 'next/image';
// import Head from 'next/head';

// import CustomTextInput from '@/components/CustomTextInput';
// import {
//   TextField,
//   Button,
//   Autocomplete
// } from '@mui/material';

// const options = ['Male', 'Female'];

// export default function Home() {
//   const [value, setValue] = React.useState<string | null>(options[0]);
//   const [inputValue, setInputValue] = React.useState('');

//   // For age dropdown
//   const optionsAge: any = ['1', '2'];

//   const [valueAge, setValueAge] = React.useState<string | null>(optionsAge[0]);
//   const [inputValueAge, setInputValueAge] = React.useState('1');

//   // For Group Join dropdown
//   const optionsGroupJoin: any = [
//     'Educational Activities',
//     'Fundraising Activities',
//     'Marketing Activities',
//     'Administrative Activities',
//     'Software Development',
//     'Graphic Design',
//     'Video Editing',
//     'Photography',
//     'Social Media',
//     'Translation',
//     'Research',
//     'Writing',
//     'Accounting',
//     'Other'
//   ];

//   const [valueGroupJoin, setValueGroupJoin] = React.useState<string | null>(optionsGroupJoin[0]);
//   const [inputValueGroupJoin, setInputValueGroupJoin] = React.useState('1');

//   for (let i = 0; i < 50; i++) {
//     optionsAge.push(`${i + 1}`);
//   }

//   return (
//     <>
//       <Head>
//         <title>Education with Takhti Online</title>
//         <meta name="description" content="Generated by create next appTakhti Online, we are on a mission to transform lives by providing accessible and quality education to underserved communities. By volunteering with us, you will play a pivotal role in making a positive impact on countless lives. We invite individuals from all backgrounds and skill sets to come together and help us create a brighter future for those in need." />
//         <link rel="icon" href="/takhti.ico" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
//         <meta name="theme-color" content="#000000" />
//       </Head>
//       <main className="grid grid-cols-2 gap-4">
//         <div className='flex justify-center'>
//           <div className='w-7/12 mt-[4.5rem]'>
//             <div>
//               <Image
//                 src="/Images/logo.svg"
//                 className="w-auto"
//                 alt="takhti"
//                 width={200}
//                 height={62.5}
//               />
//             </div>
//             <h1 className="text-2xl font-normal mt-[42px] ">Fill out the form below to join our team and start making a difference today!</h1>
//             <div className='mt-[32px]'>
//               <div className="mt-[18px]">
//                 <CustomTextInput
//                   label="Name"
//                   placeholder="Your Full Name"
//                   type="text"
//                 />
//               </div>

//               <div className="mt-[18px]">
//                 <CustomTextInput
//                   label="Email"
//                   placeholder="Your Email"
//                   type="email"
//                 />
//               </div>

//               <div className="mt-[18px]">
//                 <CustomTextInput
//                   label="Phone"
//                   placeholder="Your Phone Number"
//                   type="tel"
//                 />
//               </div>

//               <div className="mt-[18px]">
//                 <CustomTextInput
//                   label="Message"
//                   placeholder="Your Message"
//                   type="text"
//                 />
//               </div>

//               <div className="mt-5 flex justify-between">
//                 <div>
//                   <label htmlFor="name" className="text-sm">Age</label>
//                   <br />
//                   <Autocomplete
//                     value={valueAge}
//                     onChange={(event: any, newValue: string | null) => {
//                       setValueAge(newValue);
//                     }}
//                     inputValue={inputValueAge}
//                     onInputChange={(event, newInputValue) => {
//                       setInputValueAge(newInputValue);
//                     }}
//                     options={optionsAge}
//                     sx={{
//                       width: "120px",
//                       height: "44px",
//                       "border": "1px solid '#CCCCCC'",
//                       "padding": "1px",
//                       "display": "flex",
//                       "flexWrap": "wrap",
//                       '&.focused': {
//                         border: '1px solid #177ddc',
//                         boxShadow: '0 0 0 2px rgba(24, 144, 255, 0.2)',
//                         height: "54px"
//                       },
//                       '& input': {
//                         height: "54px",
//                         boxSizing: 'border-box',
//                         paddingTop: '0px',
//                         // width: '120px'
//                       },
//                       '& .MuiAutocomplete-inputRoot': {
//                         height: "54px",
//                         boxSizing: 'border-box',
//                         paddingTop: '0px',
//                         width: '120px',
//                         borderRadius: '0px',
//                         color: "rgba(161, 161, 161, 1)"
//                       }
//                     }}
//                     renderInput={(params) => <TextField {...params} />}
//                     className="mt-2"
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="name" className="text-sm">Gender</label>
//                   <br />
//                   <Autocomplete
//                     value={value}
//                     onChange={(event: any, newValue: string | null) => {
//                       setValue(newValue);
//                     }}
//                     inputValue={inputValue}
//                     onInputChange={(event, newInputValue) => {
//                       setInputValue(newInputValue);
//                     }}
//                     options={options}
//                     sx={{
//                       width: "120px",
//                       height: "54px",
//                       "border": "1px solid '#CCCCCC'",
//                       "padding": "1px",
//                       "display": "flex",
//                       "flexWrap": "wrap",
//                       '&.focused': {
//                         border: '1px solid #177ddc',
//                         boxShadow: '0 0 0 2px rgba(24, 144, 255, 0.2)'
//                       },
//                       '& input': {
//                         height: "54px",
//                         boxSizing: 'border-box',
//                         paddingTop: '0px'
//                       },
//                       '& .MuiAutocomplete-inputRoot': {
//                         height: "54px",
//                         boxSizing: 'border-box',
//                         paddingTop: '0px',
//                         width: '120px',
//                         borderRadius: '0px',
//                         color: "rgba(161, 161, 161, 1)"
//                       }
//                     }}
//                     renderInput={(params) => <TextField {...params} />}
//                     className="mt-2"
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="name" className="text-[11px]">How did you hear about us?</label>
//                   <br />
//                   <TextField
//                     label=""
//                     variant="outlined"
//                     placeholder="Youtube"
//                     fullWidth
//                     type="text"
//                     inputProps={{
//                       style: {
//                         border: '1px solid #A2A2A2',
//                         fontSize: '14px',
//                         borderRadius: '0px',
//                         lineHeight: '24px',
//                         width: '100%',
//                         color: "#A2A2A2"
//                       }
//                     }}
//                     sx={{
//                       '& .MuiOutlinedInput-root': {
//                         '& fieldset': {
//                           border: '1px solid #A2A2A2',
//                           borderRadius: '0px',
//                         }
//                       },
//                       mt: "8px",
//                       fontSize: "14px"
//                     }}
//                     className="h-[44px] mt-2"
//                   />
//                 </div>
//               </div>

//               <br />

//               <div>
//                 <label htmlFor="name" className="text-sm">Which group are you interested in joining?</label>
//                 <br />
//                 <Autocomplete
//                   value={valueGroupJoin}
//                   onChange={(event: any, newValue: string | null) => {
//                     setValueGroupJoin(newValue);
//                   }}
//                   inputValue={inputValueGroupJoin}
//                   onInputChange={(event, newInputValue) => {
//                     setInputValueGroupJoin(newInputValue);
//                   }}
//                   options={optionsGroupJoin}
//                   fullWidth
//                   sx={{
//                     width: "100%",
//                     height: "54px",
//                     "border": "1px solid '#CCCCCC'",
//                     "padding": "1px",
//                     "display": "flex",
//                     "flexWrap": "wrap",
//                     '&.focused': {
//                       border: '1px solid #177ddc',
//                       boxShadow: '0 0 0 2px rgba(24, 144, 255, 0.2)'
//                     },
//                     '& input': {
//                       height: "54px",
//                       boxSizing: 'border-box',
//                       paddingTop: '0px'
//                     },
//                     '& .MuiAutocomplete-inputRoot': {
//                       height: "54px",
//                       boxSizing: 'border-box',
//                       paddingTop: '0px',
//                       width: '100%',
//                       borderRadius: '0px',
//                       color: "rgba(161, 161, 161, 1)"
//                     }
//                   }}
//                   renderInput={(params) => <TextField {...params} />}
//                   className="mt-2"
//                 />
//               </div>

//               <Button
//                 variant="contained"
//                 className='mt-[32px] h-[48px]'
//                 style={{
//                   "background": "#011640",
//                   "borderRadius": "5px",
//                   "width": "200px",
//                   "fontFamily": "'Poppins', sans-serif",
//                   "fontStyle": "normal",
//                   "fontWeight": "600",
//                   "fontSize": "16px",
//                   "lineHeight": "24px",
//                   "textAlign": "center",
//                   "color": "#ffffff"
//                 }}
//               >
//                 Next
//               </Button>

//             </div>
//           </div>
//         </div>
//         <div className="relative flex items-center justify-center min-h-screen">
//           <div className="absolute inset-0">
//             <Image
//               src="/Images/space.png"
//               className="w-full"
//               alt="Education"
//               width={720}
//               height={1061}
//             />
//           </div>

//           {/* Overlay Container */}
//           <div className="absolute inset-0 flex justify-center">
//             <div className="bg-white bg-opacity-30 p-8 max-w-[76.3%] min-w-[76.3%] min-h-[500px] max-h-[555px] mt-[4.5rem] flex justify-center">
//               <div className='text-navy text-left max-w-[78%] min-w-[78%] mt-[60px]'>
//                 <h5 className="text-[16px] font-unisans leading-[24px]">Empower Communities through</h5>
//                 <h4 className="text-5xl font-unisans leading-[64px]">Education with</h4>
//                 <h2 className="text-[64px] font-extrabold leading-[88px]">Takhti Online</h2>
//                 <p className="mt-2 text-[17px] font-normal leading-7 tracking-wide font-['Proxima Nova'] text-black">Takhti Online, we are on a mission to transform lives by providing accessible and quality education to underserved communities. By volunteering with us, you will play a pivotal role in making a positive impact on countless lives. We invite individuals from all backgrounds and skill sets to come together and help us create a brighter future for those in need.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </>
//   )
// }
import React from 'react';
import Image from 'next/image';
import Head from 'next/head';

import CustomTextInput from '@/components/CustomTextInput';
import {
  TextField,
  Button,
  Autocomplete
} from '@mui/material';

const options = ['Male', 'Female'];

export default function Home() {

  const [windowSize, setWindowSize] = React.useState([
    (typeof window !== 'undefined') ? window.innerWidth : 0,
    (typeof window !== 'undefined') ? window.innerHeight : 0
  ]);

  React.useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });

  const [currentPage, setCurrentPage] = React.useState(1);

  const [value, setValue] = React.useState<string | null>(options[0]);
  const [inputValue, setInputValue] = React.useState('');

  // For age dropdown
  const optionsAge: any = ['1', '2'];

  const [valueAge, setValueAge] = React.useState<string | null>(optionsAge[0]);
  const [inputValueAge, setInputValueAge] = React.useState('1');

  // For Group Join dropdown
  const optionsGroupJoin: any = [
    'Educational Activities',
    'Fundraising Activities',
    'Marketing Activities',
    'Administrative Activities',
    'Software Development',
    'Graphic Design',
    'Video Editing',
    'Photography',
    'Social Media',
    'Translation',
    'Research',
    'Writing',
    'Accounting',
    'Other'
  ];

  const [valueGroupJoin, setValueGroupJoin] = React.useState<string | null>(optionsGroupJoin[0]);
  const [inputValueGroupJoin, setInputValueGroupJoin] = React.useState('1');

  for (let i = 0; i < 50; i++) {
    optionsAge.push(`${i + 1}`);
  }

  return (
    <>
      <Head>
        <title>Education with Takhti Online</title>
        <meta name="description" content="Generated by create next appTakhti Online, we are on a mission to transform lives by providing accessible and quality education to underserved communities. By volunteering with us, you will play a pivotal role in making a positive impact on countless lives. We invite individuals from all backgrounds and skill sets to come together and help us create a brighter future for those in need." />
        <link rel="icon" href="/takhti.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        <div className='order-2 md:order-1 lg:order-1 flex justify-center'>
          <div className='w-10/12 md:w-7/12 lg:w-7/12 mt-[4.5rem]'>
            <div>
              <Image
                src="/Images/logo.svg"
                className="w-auto"
                alt="takhti"
                width={200}
                height={62.5}
              />
            </div>
            {(currentPage === 1) ? (
              <>
                <h1 className="text-2xl font-normal mt-[42px] ">Fill out the form below to join our team and start making a difference today!</h1>
                <div className='mt-[32px]'>
                  <div className="mt-[18px]">
                    <CustomTextInput
                      label="Name"
                      placeholder="Your Full Name"
                      type="text"
                    />
                  </div>

                  <div className="mt-[18px]">
                    <CustomTextInput
                      label="Email"
                      placeholder="Your Email"
                      type="email"
                    />
                  </div>

                  <div className="mt-[18px]">
                    <CustomTextInput
                      label="Phone"
                      placeholder="Your Phone Number"
                      type="tel"
                    />
                  </div>

                  <div className="mt-[18px]">
                    <CustomTextInput
                      label="Message"
                      placeholder="Your Message"
                      type="text"
                    />
                  </div>

                  <div className="mt-5 flex flex-col space-y-6 md:space-y-0 lg:space-y-0 md:flex-row lg:flex-row md:justify-between lg:justify-between">
                    <div>
                      <label htmlFor="name" className="text-sm">Age</label>
                      <br />
                      <Autocomplete
                        value={valueAge}
                        onChange={(event: any, newValue: string | null) => {
                          setValueAge(newValue);
                        }}
                        inputValue={inputValueAge}
                        onInputChange={(event, newInputValue) => {
                          setInputValueAge(newInputValue);
                        }}
                        options={optionsAge}
                        sx={{
                          width: (windowSize[0] < 600) ? ("100%") : "120px",
                          height: "44px",
                          "border": "1px solid '#CCCCCC'",
                          "padding": "1px",
                          "display": "flex",
                          "flexWrap": "wrap",
                          '&.focused': {
                            border: '1px solid #177ddc',
                            boxShadow: '0 0 0 2px rgba(24, 144, 255, 0.2)',
                            height: "54px"
                          },
                          '& input': {
                            height: "54px",
                            boxSizing: 'border-box',
                            paddingTop: '0px',
                            // width: '120px'
                          },
                          '& .MuiAutocomplete-inputRoot': {
                            height: "54px",
                            boxSizing: 'border-box',
                            paddingTop: '0px',
                            width: (windowSize[0] < 600) ? ("100%") : "120px",
                            borderRadius: '0px',
                            color: "rgba(161, 161, 161, 1)"
                          }
                        }}
                        renderInput={(params) => <TextField {...params} />}
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <label htmlFor="name" className="text-sm">Gender</label>
                      <br />
                      <Autocomplete
                        value={value}
                        onChange={(event: any, newValue: string | null) => {
                          setValue(newValue);
                        }}
                        inputValue={inputValue}
                        onInputChange={(event, newInputValue) => {
                          setInputValue(newInputValue);
                        }}
                        options={options}
                        sx={{
                          width: (windowSize[0] < 600) ? ("100%") : "120px",
                          height: "54px",
                          "border": "1px solid '#CCCCCC'",
                          "padding": "1px",
                          "display": "flex",
                          "flexWrap": "wrap",
                          '&.focused': {
                            border: '1px solid #177ddc',
                            boxShadow: '0 0 0 2px rgba(24, 144, 255, 0.2)'
                          },
                          '& input': {
                            height: "54px",
                            boxSizing: 'border-box',
                            paddingTop: '0px'
                          },
                          '& .MuiAutocomplete-inputRoot': {
                            height: "54px",
                            boxSizing: 'border-box',
                            paddingTop: '0px',
                            width: (windowSize[0] < 600) ? ("100%") : "120px",
                            borderRadius: '0px',
                            color: "rgba(161, 161, 161, 1)"
                          }
                        }}
                        renderInput={(params) => <TextField {...params} />}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <label htmlFor="name" className="text-[11px]">How did you hear about us?</label>
                      <br />
                      <TextField
                        label=""
                        variant="outlined"
                        placeholder="Youtube"
                        fullWidth
                        type="text"
                        inputProps={{
                          style: {
                            border: '1px solid #A2A2A2',
                            fontSize: '14px',
                            borderRadius: '0px',
                            lineHeight: '24px',
                            width: '100%',
                            color: "#A2A2A2"
                          }
                        }}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                              border: '1px solid #A2A2A2',
                              borderRadius: '0px',
                            }
                          },
                          mt: "8px",
                          fontSize: "14px"
                        }}
                        className="h-[44px] mt-2"
                      />
                    </div>
                  </div>

                  <br />

                  <div>
                    <label htmlFor="name" className="text-sm">Which group are you interested in joining?</label>
                    <br />
                    <Autocomplete
                      value={valueGroupJoin}
                      onChange={(event: any, newValue: string | null) => {
                        setValueGroupJoin(newValue);
                      }}
                      inputValue={inputValueGroupJoin}
                      onInputChange={(event, newInputValue) => {
                        setInputValueGroupJoin(newInputValue);
                      }}
                      options={optionsGroupJoin}
                      fullWidth
                      sx={{
                        width: "100%",
                        height: "54px",
                        "border": "1px solid '#CCCCCC'",
                        "padding": "1px",
                        "display": "flex",
                        "flexWrap": "wrap",
                        '&.focused': {
                          border: '1px solid #177ddc',
                          boxShadow: '0 0 0 2px rgba(24, 144, 255, 0.2)'
                        },
                        '& input': {
                          height: "54px",
                          boxSizing: 'border-box',
                          paddingTop: '0px'
                        },
                        '& .MuiAutocomplete-inputRoot': {
                          height: "54px",
                          boxSizing: 'border-box',
                          paddingTop: '0px',
                          width: '100%',
                          borderRadius: '0px',
                          color: "rgba(161, 161, 161, 1)"
                        }
                      }}
                      renderInput={(params) => <TextField {...params} />}
                      className="mt-2"
                    />
                  </div>

                  <Button
                    variant="contained"
                    className='mt-[32px] h-[48px]'
                    onClick={() => setCurrentPage(2)}
                    style={{
                      "background": "#011640",
                      "borderRadius": "5px",
                      "width": "200px",
                      "fontFamily": "'Poppins', sans-serif",
                      "fontStyle": "normal",
                      "fontWeight": "600",
                      "fontSize": "16px",
                      "lineHeight": "24px",
                      "textAlign": "center",
                      "color": "#ffffff"
                    }}
                  >
                    Next
                  </Button>
                  <br />
                  <br />
                  <br />
                  <br />
                </div>
              </>
            ) : (currentPage === 2) && (
              <>
                <h1 className="text-5xl font-normal mt-[42px] ">Takhti Games</h1>
                <div className='mt-[32px]'>
                  <div className="mt-[18px]">
                    <CustomTextInput
                      label="What type of video games are you interested in?"
                      placeholder=""
                      type="text"
                    />
                  </div>

                  <div className="mt-[18px]">
                    <CustomTextInput
                      label="Have you participated in any gaming tournaments before?"
                      placeholder=""
                      type="text"
                    />
                  </div>

                  <div className="mt-[18px]">
                    <CustomTextInput
                      label="Do you have any experience in game design or development?"
                      placeholder=""
                      type="text"
                    />
                  </div>

                  <div className="mt-[18px]">
                    <CustomTextInput
                      label="What is your favorite video game and why?"
                      placeholder=""
                      type="text"
                    />
                  </div>

                  <div className="mt-[18px]">
                    <CustomTextInput
                      label="Social Activities:"
                      placeholder=""
                      type="text"
                    />
                  </div>

                  <div className="mt-[18px] h-60">
                    <CustomTextInput
                      label="Other skils"
                      placeholder=""
                      type="text"
                      multiline={true}
                      rows={6}
                    />
                  </div>

                  <Button
                    variant="contained"
                    className='mt-[32px] h-[48px]'
                    onClick={() => alert("Submitted")}
                    style={{
                      "background": "#011640",
                      "borderRadius": "5px",
                      "width": "200px",
                      "fontFamily": "'Poppins', sans-serif",
                      "fontStyle": "normal",
                      "fontWeight": "600",
                      "fontSize": "16px",
                      "lineHeight": "24px",
                      "textAlign": "center",
                      "color": "#ffffff"
                    }}
                  >
                    Submit
                  </Button>
                  <br />
                  <br />
                  <br />
                  <br />
                </div>
              </>
            )}
          </div>
        </div>
        <div className="order-2 md:order-1 lg:order-1 relative flex items-center justify-center min-h-screen">
          <div className="absolute inset-0">
            <Image
              src="/Images/space.png"
              className="w-full h-screen md:h-full lg:h-full object-cover"
              alt="Education"
              width={720}
              height={1061}
            />
          </div>

          {/* Overlay Container */}
          <div className="absolute inset-0 flex justify-center">
            <div className="bg-white bg-opacity-30 p-8 w-full md:max-w-[76.3%] lg:max-w-[76.3%] md:min-w-[76.3%] lg:min-w-[76.3%] min-h-[555px] max-h-[780px] md:max-h-[700px] lg:max-h-[700px] mt-10 md:mt-[4.5rem] lg:mt-[4.5rem] flex justify-center">
              <div className='text-navy text-left w-full md:max-w-[78%] lg:max-w-[78%] md:min-w-[78%] lg:min-w-[78%] mt-[30px] md:mt-[60px] lg:mt-[60px]'>
                <h5 className="text-[16px] font-unisans leading-[24px]">Empower Communities through</h5>
                <h4 className="text-4xl md:text-5xl lg:text-5xl font-unisans leading-[64px]">Education with</h4>
                <h2 className="text-[44px] md:text-[64px] lg:text-[64px] font-extrabold leading-[58px] md:leading-[88px] lg:leading-[88px]">Takhti Online</h2>
                <p className="mt-2 text-[17px] font-normal leading-7 tracking-wide font-['Proxima Nova'] text-black">Takhti Online, we are on a mission to transform lives by providing accessible and quality education to underserved communities. By volunteering with us, you will play a pivotal role in making a positive impact on countless lives. We invite individuals from all backgrounds and skill sets to come together and help us create a brighter future for those in need.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
