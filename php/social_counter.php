<?php

    require_once('config.php'); // Path to config file

    if (FACEBOOK_PAGE_NAME === '' || FACEBOOK_PAGE_NAME === 'FACEBOOK_PAGE_NAME_HERE') {
        echo 'You need facebook Page Name';
        exit;
    }

    if (YOUTUBE_CHANNEL_NAME === '' || YOUTUBE_CHANNEL_NAME === 'YOUTUBE_CHANNEL_NAME_HERE') {
        echo 'You need Youtube Channel Name';
        exit;
    }

    $facebook_page_name = FACEBOOK_PAGE_NAME;
    $youtube_channel_name =  YOUTUBE_CHANNEL_NAME;

    $cache = "cache/counter";
    $expire = 900;

    //create the cache file if dont exist
    if(!file_exists($cache) or (filemtime($cache) > $expire)){
	    file_put_contents($cache, '{}');
    }
	function update_cache($cache_url, $cache_data){
		//update the cache file
		$fh = fopen($cache_url, 'w')or die("500");
		fwrite($fh, json_encode($cache_data,JSON_UNESCAPED_UNICODE));
		fclose($fh);
	}

	function nbr_format($nbr){
		if(is_numeric($nbr)){
			return number_format($nbr);
		}else{ return null;}
	}

	// Facebook
	function facebook_fans($fb_page, $cache, $expire){
			$expire = time()-$expire;
			$facebookUrl = 'http://graph.facebook.com/'.$fb_page;
			$cache_data = FetchData($cache);
			if((filemtime($cache) < $expire)  or (!isset($cache_data->facebook))){
				$fb_fans =  $cache_data->facebook = FetchData($facebookUrl)->likes;
				update_cache($cache, $cache_data);
			}else{
				$fb_fans = $cache_data->facebook;
			}
			return nbr_format($fb_fans);
	}

	// Youtube
	function youtube_subscribers($yt_channel, $cache, $expire){
			$expire = time()-$expire;
			$cache_data = FetchData($cache);
			$ytUrl = 'http://gdata.youtube.com/feeds/api/users/'.$yt_channel.'?alt=json';
			if((filemtime($cache) < $expire) or (!isset($cache_data->youtube))){
				$yt_subscribers =$cache_data->youtube = FetchData($ytUrl)->entry->{'yt$statistics'}->subscriberCount;
				update_cache($cache, $cache_data);
			}else{
				$yt_subscribers = $cache_data->youtube;
			}
			return nbr_format($yt_subscribers);
	}

	function FetchData($json_url='',$use_curl=false){
	    if($use_curl){
	        $ch = curl_init();
	        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	        curl_setopt($ch, CURLOPT_URL, $json_url);
	        $json_data = curl_exec($ch);
	        curl_close($ch);
	        return json_decode($json_data);
	    }else{
	        $json_data = @file_get_contents($json_url);
	        if($json_data == true){
	        	return json_decode($json_data);
	    	}else{ return null;}
	    }
	}

	extract($_POST);
	switch ($act) {
		case 'facebook_Count': echo facebook_fans($facebook_page_name, $cache, $expire); break;
		case 'youtube_Count': echo youtube_subscribers($youtube_channel_name, $cache, $expire); break;
		default: echo '...'; break;
	}

?>