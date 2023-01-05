import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {ApiService} from '../../service/api.service';
import {Box, Chip, Typography, Stack, Avatar} from '@mui/material';
import { CheckCircle, FavoriteOutlined, MarkChatRead, Tag, Visibility } from '@mui/icons-material';
import ReactPlayer from 'react-player';
import {Loader, Videos} from '../'

const VideoDetail = () => {
    const [videosDetail, setVideosDetail] = useState(null);
    const [relatedVideo, setRelatedVideo] = useState([]);
    const {id} = useParams();

    useEffect(()=>{
        const getData = async()=>{

            try{
                const data = await ApiService.fetching(`videos?part=snippet,statistics&id=${id}`)
                setVideosDetail(data.items[0])
                const relatedData = await ApiService.fetching(`search?part=snippet&relatedToVideoId=${id}&type=video`)
                setRelatedVideo(relatedData.items);
            }catch (error){
                console.log(error)
            }
        }

        getData();
    }, [id]);

    if(!videosDetail?.snippet) return <Loader />


    return (
       <Box minHeight={"90vh"} mb={10}>
        <Box display={'flex'} sx={{flexDirection:{xs:'column', md:'row'}}}>
            <Box width={{xs:"100%", md:"75%"}}>
                <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
                {
                    videosDetail?.snippet.tags.map((item, idx)=>(
                        <Chip
                            label={item}
                            key={idx}
                            sx={{marginTop:'10px', cursor:"pointer", ml:'10px'}}
                            deleteIcon={<Tag />}
                            onDelete={()=>{}}
                            variant='outlined'
                        />
                    ))
                }
                <Typography variant='h5' fontWeight='bold' p={2}>
                    {videosDetail.snippet.title}
                </Typography>
                <Typography variant='subtitle2' sx={{opacity:'.7'}} p={2}>
                    {videosDetail.snippet.description}
                </Typography>
                <Stack direction='row' gap='20px' alignItems='center' py={1} px={2} >
                    <Stack sx={{opacity:0.7}} direction='row' alignItems='center' gap='3px' >
                        <Visibility />
                        {parseInt(videosDetail.statistics.viewCount).toLocaleString()} views
                    </Stack>
                    <Stack sx={{opacity:0.7}} direction='row' alignItems='center' gap='3px' >
                        <FavoriteOutlined />
                        {parseInt(videosDetail.statistics.likeCount).toLocaleString()} likes
                    </Stack>
                    <Stack sx={{opacity:0.7}} direction='row' alignItems='center' gap='3px' >
                        <MarkChatRead />
                        {parseInt(videosDetail.statistics.commentCount).toLocaleString()} comment
                    </Stack>
                </Stack>
                <Stack direction='row' py={1} px={2}>
                    <Stack direction='row' alignItems='center' gap='5px' marginTop='5px'>
                        <Avatar 
                        alt={videosDetail.snippet.channelTitle}
                        src={videosDetail.snippet.thumbnails.default.url} />
                    <Typography variant='subtitle2' color='gray'>
                        {videosDetail.snippet.chanelTitle}
                        <CheckCircle sx={{fontSize:'12px', color:'gray', ml:'5px'}} />
                    </Typography>
                    </Stack>
                </Stack>
            </Box>
            <Box width={{xs:"100%", md:"25%"}}>
                <Videos videos={relatedVideo && relatedVideo} />
            </Box>
        </Box>
       </Box>
    );
}

export default VideoDetail;
