import React, {Component}from 'react';

export default class Sprints extends Component {

    constructor(props) {
        super(props)
        this.state = {
          photos: []
        }
      }
    
      componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/photos?albumId=1')
        .then(response => response.json())
        .then(json => this.setState({photos: json}))
      }

    render() {
        return (
            <section className="container p-3 mt-5 mb-5">
            <ul className="list-unstyled">
              {
                this.state.photos.map(photo => {
                  return (
                    <li className="media pt-2">
                      <img src={photo.thumbnailUrl} alt="" className="mr-3" />
                      <div className="media-body">
                        <h5 className="mt-0 mb-1">{photo.title}</h5>
                        <p>Título: {photo.title}</p>
                      </div>
                    </li>
                  )
                })
              }
            </ul>
          </section>
        );
    }
}