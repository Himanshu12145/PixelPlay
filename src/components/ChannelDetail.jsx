import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard } from "./";
import { fetchFromApi } from "../utils/fetchFromApi";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState([]);
  // const banner = "";
  const { id } = useParams();

  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchFromApi(`channels?part=snippet&id=${id}`);

      setChannelDetail(data?.items[0]);

      const videosData = await fetchFromApi(
        `search?channelId=${id}&part=snippet%2Cid&order=date`
      );

      setVideos(videosData?.items);
      // if (!setChannelDetail) return <Loader />;
    };

    fetchResults();
  }, [id]);

  // console.log(channelDetail?.brandingSettings);
  // console.log(channelDetail?.brandingSettings?.image.bannerExternalUrl);
  return (
    <Box minHeight="95vh">
      <Box>
        <Box
          component="img"
          sx={{
            height: { md: "400px", xs: "300px" },
            width: "100%",
            zIndex: 10,
            // width: 350,
            // maxHeight: { xs: 233, md: 167 },
            // maxWidth: { xs: 350, md: 250 },
          }}
          src={`${channelDetail?.brandingSettings?.image.bannerExternalUrl}`}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
      </Box>
      <Box p="2" display="flex">
        <Box sx={{ mr: { sm: "100px" } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
