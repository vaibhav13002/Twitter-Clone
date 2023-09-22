import { Avatar, Button } from '@mui/material'
import { useFormik } from 'formik' // Remove the unnecessary import of Formik
import React, { useState } from 'react'
import * as Yup from 'yup'
import ImageIcon from '@mui/icons-material/Image';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import TweetCard from './TweetCard';

const validationSchema = Yup.object().shape({
    content: Yup.string().required("Tweet text is required")
})
const HomeSection = () => {
    const [uploadingImage, setUploadingImage] = useState(false);
    const [selectImage, setSelectedImage] = useState(""); //selected image ko dikhane ke liye

    const handleSubmit = (values) => {
        console.log("values", values)
    }

    const formik = useFormik({
        initialValues: {
            content: "",
            image: ""
        },
        onSubmit: handleSubmit,
        validationSchema, //validate krne ke liye ki a hamari field empty nhi rehni chyeh aur email me bas email rehna chayeh
    })

    const handleSelectImage = (event) => {
        setUploadingImage(true);
        const imgUrl = event.target.files[0]
        formik.setFieldValue("image", imgUrl);
        setSelectedImage(imgUrl);
        setUploadingImage(false);
    }

    return (
        <div className='space-y-5'>
            <section className='flex items-center'>
                <h1 className='py-3 text-xl font-bold opacity-90 text-left ml-20'>Home</h1>
            </section>
            <section className={'pb-8'}> {/*This section contains the new tweet part(avatar img,form area, all 3 logo, image logo fun, tweet button)*/}
                <div className='ml-20 flex space-x-0'>
                    <Avatar alt="username" src='https://cdn4.iconfinder.com/data/icons/avatar-circle-1-1/72/78-256.png' />
                    <div>
                        <form onSubmit={formik.handleSubmit}> {/*inbuilt in react which is taking as a form submisssion*/}
                            <div className='py-1 px-4'>
                                <input
                                    type="text"
                                    name='content'
                                    placeholder='What is happening'
                                    className={'border-none outline-none text-xl bg-transparent'}
                                    {...formik.getFieldProps("content")} />
                                {formik.errors.content && formik.touched.content && (
                                    <span className='text-red-500'>{formik.errors.content}</span>
                                )}
                            </div>
                            {/* <div>
                                <img src='' alt='' />
                            </div> */}
                            <div className='flex justify-between items-center mt-5'>
                                <div className='flex space-x-5 items-center'>
                                    <label className='flex items-center space-x-2 rounded-md cursor-pointer'>
                                    <ImageIcon className='text-[#1d9bf0]' />
                                    <input type='file' name='imageFile' className='hidden'
                                    onChange={handleSelectImage} />
                                    </label>
                                    <FmdGoodIcon className='text-[#1d9bf0]'/>
                                    <TagFacesIcon className='text-[#1d9bf0]'/>
                                </div>
                                <div> {/*tweet wala buttton whats happening ke yaha*/}
                                    <Button sx={{width:"95%",borderRadius:"20px",paddingY:"8px",paddingX:"20px",bgcolor:"#1d9bf0"}}
                variant='contained' type='submit'>
                                        Tweet
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <section className='ml-20 flex flex-col space-x-0'>
  {[1, 1, 1, 1, 1].map((item) => (
    <TweetCard key={item} />
  ))}
</section>
        </div>
    )
}

export default HomeSection
