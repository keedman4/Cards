import { IMedia } from "./IMedia";
export class ClassMedia{
    public Title:string;
    public Date:string;
    public Image:string;
    public Content:string;
    public Url:string;
    public Description: string;
    public Created: string;
    public Link: string;
    public BannerImageUrl: string;

  
    
    constructor(item: IMedia){
        this.Title = item.Title;
        this.Date = item.Date;
        this.Image = item.Image;
        this.Content = item.Content;
        this.Url = item.Url;
        this.Description = item.Description;
        this.Created = item.Created;
        this.Link = item.Link;
        this.BannerImageUrl= item.BannerImageUrl;
        
      
       
    }
}