interface shopifyData {
    ID: number;
    Artist: string;
    Url_Artist: string;
    Track: string;
    Album: string;
    Album_type: string;
    Uri_song: string;
    Duration_ms: string;
    No_of_Streams: number
}
interface youtubeData {
    ID: number
    Track: string
    Url_youtube: string;
    Title: string;
    Channel: string;
    Views: number;
    Likes: number;
    Comments: number
    Licensed: number;
    official_video: string;
}
interface data {
    Table: string;
    data: shopifyData[] | youtubeData[];
}

interface queryResponse {
    code: number;
    data: data
}