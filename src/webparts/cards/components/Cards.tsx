import * as React from 'react';
import { ICardsProps } from './ICardsProps';
import { escape } from '@microsoft/sp-lodash-subset';
import MediaCard from './ImgCard/MediaCard';

export default class Cards extends React.Component<ICardsProps, {}> {
  public render(): React.ReactElement<ICardsProps> {
    return (
      <>
      <MediaCard />
      </>
    );
  }
}
