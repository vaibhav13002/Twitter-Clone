import RepeatIcon from '@mui/icons-material/Repeat';
import { Avatar, Button, Menu, MenuItem } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import BarChartIcon from '@mui/icons-material/BarChart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { FavoriteOutlined } from '@mui/icons-material';

const TweetCard = () => {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDeleteTweet = () => {
    console.log("delete tweet")
    handleClose();
  };

  const handleOpenReplyModel = () => {
    console.log("open model")
  }
  const handleCreateRetweet = () => {
    console.log("handle create retweet")
  }
  const handleLiketweet = () => {
    console.log("handle like tweet")
  }
  return (
    <div className='ml-auto'> 
      {/* <div className='flex items-center font-semibold text-gray-700 py2'>
            <RepeatIcon/>
            <p>You Retweet</p>
        </div> */}
      <div className='flex space-x-5'>
        <Avatar
          onClick={() => navigate('/profile/${6}')}
          className='cursor-pointer'
          alt='username'
          src='https://cdn4.iconfinder.com/data/icons/avatar-circle-1-1/72/78-256.png'
        />
        <div className='w-full'>
          {/* <div className='flex justify-between items-center'> */}
          <div className='flex justify-between items-center'>

            <div className='flex cursor-pointer items-center space-x-2'>
              <span className='font-semibold'>Vaibhav Mishra</span>
              <span className='text-gray-600'>@vaibhav . 2m</span>
              <img className='ml-2 w-5 h-5' src='https://th.bing.com/th?id=OIP.X7xE5WB3shYjMWVQYav9JwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2' alt='' />
            </div>
            <div className='mb-2 flex justify-between items-right' > {/* Button on the tweet delete and edit*/}
              <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                <MoreHorizIcon />
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem> */}
                <MenuItem onClick={handleDeleteTweet}>Delete</MenuItem>
                <MenuItem onClick={handleDeleteTweet}>Edit</MenuItem>
              </Menu>
            </div>
          </div>

          <div className='mt-2'>
            <div className='cursor-pointer'>
              <p className='mb-2 flex justify-between items-center'>Twitter clone - full stack project using React and Spring boot</p>
              <img className='w-[28rem] border border-gray-500 p-5 rounded-md' src='https://th.bing.com/th/id/OIP.K-4RqDC6zFrpAG31ayDDOgHaHa?pid=ImgDet&rs=1' alt='' />
            </div>
            <div className='py-5 flex flex-wrap justify-between items-center'>
              <div className='space-x-3 flex items-center text-gray-600'>
                <ChatBubbleOutlineIcon className='cursor-pointer' onClick={handleOpenReplyModel} />
                <p>43</p>
              </div>
              <div className={`${true? `text-pink-600` : `text-gray-600`} space-x-3 flex items-center`}>
              {/* <div className={`${true ? 'text-pink-600' : 'text-gray-600'} space-x-3 flex items-center`}> */}

                <RepeatIcon className='onClick={handleCreateRetweet} cursor-pointer' />
                <p>54</p>
              </div>
{/* curly braces ke andar template literal,backticks he use hoga special string */}
              <div className={`${true? `text-pink-600`:`text-gray-600`} space-x-3 flex items-center`}>

                {true ? <FavoriteIcon className='onClick={handleLiketweet} cursor-pointer' /> : <FavoriteOutlined className='onClick={handleLiketweet} cursor-pointer' />}
                <p>54</p>
              </div>
              <div className='space-x-3 flex items-center text-gray-600'>
                <BarChartIcon className='cursor-pointer' onClick={handleOpenReplyModel} />
                <p>430</p>
              </div>
              <div className='space-x-3 flex items-center text-gray-600'>
                <FileUploadIcon className='cursor-pointer' onClick={handleOpenReplyModel} />

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TweetCard