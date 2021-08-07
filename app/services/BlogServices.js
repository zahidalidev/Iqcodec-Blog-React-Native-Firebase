import axios from "axios";

export const GetAllBlogs = async () => {
    let { data } = await axios.get('https://iqcodec.tech/wp-json/wp/v2/posts');
    let filteredData = []
    for (let i = 0; i < data.length; i++) {
        let tempObj = {
            id: data[i].id,
            date: data[i].date,
            title: data[i].title.rendered,
            content: data[i].content.rendered,
            excerpt: data[i].excerpt.rendered,
            featuredImageSrc: data[i].featured_image_src,
            authorName: data[i].author_info.display_name
        };
        filteredData.push(tempObj);
    }
    return filteredData;
}