import React, { createRef } from 'react';
import { Button, Accordion } from 'react-bootstrap';
import Avatar from './../../assets/profile/person_outline_24px.svg';

class Uploadimage extends React.Component {
    constructor(props: never) {
        super(props);
        this.hiddenFileInput = createRef();
        this.state = { file: '', imagePreviewUrl: Avatar };
    }

    _handleSubmit(e: React.SyntheticEvent): void {
        e.preventDefault();
        // TODO: do something with -> this.state.file
        console.log('handle uploading-', this.state.file);
    }

    _handleImageChange(e: React.SyntheticEvent): void {
        e.preventDefault();

        const reader = new FileReader();
        const file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result,
            });
        };

        reader.readAsDataURL(file);
    }

    // Programatically click the hidden file input element
    // when the Button component is clicked
    _handleClick(): void {
        this.hiddenFileInput.current.click();
    }

    render(): ReactNode {
        const { imagePreviewUrl } = this.state;

        return (
            <div className="previewComponent">
                <img src={imagePreviewUrl} className="intervenant-image" />
                <form onSubmit={(e) => this._handleSubmit(e)}>
                    <Accordion.Toggle
                        as={Button}
                        className="text-image-link"
                        variant="link"
                        eventKey="0"
                        onClick={(e) => this._handleClick(e)}
                    >
                        Ajouter une image profil
                    </Accordion.Toggle>
                    <input
                        className="fileInput"
                        type="file"
                        ref={this.hiddenFileInput}
                        onChange={(e) => this._handleImageChange(e)}
                        style={{ display: 'none' }}
                    />
                </form>
            </div>
        );
    }
}
export default Uploadimage;
