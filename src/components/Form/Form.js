import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import styles from './styles';


class AppForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            errors: {
                name: '',
                description: '',
            },
        };
    }

    onChangeHandler = (event, nameField) => {
        const value = event.target.value;

        this.setState({
            [nameField]: value,
        })
    };

    onFocusHandler = (nameField) => {
        if (this.state.errors[nameField]) {
            this.setState({
                errors: {
                    ...this.state.errors,
                    [nameField]: '',
                }
            })
        }
    };

    onAdd = () => {
        const { onAddElement } = this.props;

        let errors = {};

        if (!this.state.name) {
            errors.name = 'Имя не может быть пустым';
        }
        if (!this.state.description) {
            errors.description = 'Описание не может быть пустым';
        }

        if (errors.name || errors.description) {
            this.setState({ errors });
            return;
        }

        onAddElement({
            name: this.state.name,
            description: this.state.description,
            checked: false,
        });

        this.setState({
            name: '',
            description: '',
            errors: {
                name: '',
                description: '',
            },
        });
    };

    render() {
        const { classes } = this.props;

        return (
            <>
                <TextField
                    className={classes.input}
                    label="Введите название"
                    fullWidth
                    value={this.state.name}
                    onChange={(e) => this.onChangeHandler(e, 'name')}
                    onFocus={() => this.onFocusHandler('name')}
                    error={!!this.state.errors.name}
                    helperText={this.state.errors.name}
                />
                <TextField
                    className={classes.input}
                    label="Введите описание"
                    fullWidth
                    value={this.state.description}
                    onChange={(e) => this.onChangeHandler(e, 'description')}
                    onFocus={() => this.onFocusHandler('description')}
                    error={!!this.state.errors.description}
                    helperText={this.state.errors.description}
                />
                <Button color="primary" onClick={this.onAdd}>Добавить</Button>
            </>
        );
    }
}

export default withStyles(styles)(AppForm);
