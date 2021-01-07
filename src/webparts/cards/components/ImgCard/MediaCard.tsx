import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import pnp from 'sp-pnp-js';
import { IMediaItemReactProps } from './IMediaItemReactProps';
import { ClassMedia } from './ClassMedia';
import { IMedia } from './IMedia';
import style from '../Cards.module.scss';



export default class MediaCard extends React.Component<IMediaItemReactProps, any> {
  public constructor(props:IMediaItemReactProps,any)
  {
  super(props);
  this.state={
      items:[]
  };
  }

public  render() {
    
    const theme = createMuiTheme({
      typography: {
        subtitle1: {
          fontSize: 9,
        },
        body1: {
          fontSize: 7,
        },
      }
    });


    
    return (

      
      <>
      
      {<div className={style.headtext}>News/Updates</div>}
      {
      this.state.items.map((item:IMedia) => {
          return(
            <Card className={style.root}>
            <CardActionArea>
              <CardMedia className={style.media} image={item.BannerImageUrl['Url']} title="Axa Mansard News"/>
              <CardContent>
              <ThemeProvider theme={theme}>
                <Typography variant="subtitle1">
                {item.Title}
                </Typography>
                
                <Typography variant="body1" color="textSecondary" component="p">
                {item.Description}
                </Typography>
                <Typography variant="body1" color="textSecondary" component="small">
                {item.Created}
                </Typography>
                </ThemeProvider>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <a href={item.Url} target="_blank">
                Learn More
              </a>
            </CardActions>
          
        </Card>
          );
      })
  }
      
      
       </>

    );
    
  }

  public componentDidMount()
    {
        // debugger;
        this._MediaList();
    }
    private _MediaList():void
    {
        pnp.sp.web.lists.getByTitle("Site Pages").items.filter("IsFeaturedNews eq ('Internal News')").select("Title","Description","Created","Url","BannerImageUrl").get().then
        ((response)=>{
            let MediaCollection=response.map(item=> new ClassMedia(item)).reverse();
            let MediaCard = MediaCollection.slice(0, 3);
            this.setState({items:MediaCard});
        }

        );
    }

}

