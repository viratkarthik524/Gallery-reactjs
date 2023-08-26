// Write your code here.
import './index.css'
import {Component} from 'react'
import ThumbnailsList from '../ThumbnailsList'

class Gallery extends Component {
  state = {
    selectedImageId: 0,
  }
  /* takes id from index.js/thumbnail using onClickThumbnail */

  updateSelectedImageId = id => {
    this.setState({selectedImageId: id})
  }

  renderSelectedImage = () => {
    const {photosData} = this.props
    const {selectedImageId} = this.state
    const {imageUrl, imageAltText} = photosData[selectedImageId]
    return <img src={imageUrl} className="image" alt={imageAltText} />
  }
  /* main render application  */

  render() {
    const {photosData} = this.props
    const {selectedImageId} = this.state
    return (
      <div className="app-container">
        <div className="container">
          {this.renderSelectedImage()}
          <ThumbnailsList
            photosData={photosData}
            selectedImageId={selectedImageId}
            onClickUpdateId={this.updateSelectedImageId}
          />
        </div>
      </div>
    )
  }
}
;<li>
  <button></button>
  <button></button>
  <button></button>
  <button></button>
  <button></button>
  <button></button>
  <button></button>
  <button></button>
  <button></button>
  <button></button>
</li>

export default Gallery
