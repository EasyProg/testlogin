/**
 * Created by Михаил on 06.04.2018.
 */
import React , {Component} from 'react';
import {Form,Input,Button} from 'antd';
import {connect} from 'react-redux';
import '../styles/css/Login.css';
import {fetchSession,clearSession} from '../actions/actions';
const FormItem = Form.Item;
class Login extends Component {
    checkPasswordLength = (rule, value, callback) =>
    {
        if (value&&value.length<4) {
            callback('Pasword must be at least 4 symbols');
        } else {
            callback();
        }
    };
    handleSubmit = (e) => {
        const form = this.props.form;
        e.preventDefault();
        form.validateFields((err, values) =>
        {
            if (err)
            {
                return false;
            }
            if (!err)
            {
                this.props.fetchData(values);
            }

        });
    };
    render()   {
        const  { getFieldDecorator } = this.props.form;
        if     (this.props.error)
            getFieldDecorator.setFields({
                password: {
                    value: '',
                    errors: [new Error('User or password is invalid')],
                },
            });
        if (!this.props.token)
        return (
            <Form onSubmit={this.handleSubmit} className="form-login">
                <FormItem>
                {getFieldDecorator('email',
                    {
                        rules: [{ required: true, message: 'Please input your email!' },
                                { type:     'email',  message: 'Please input correct email!'}
                               ],
                })(
                <Input placeholder="Email"/>)}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{
                            required: true, message: 'Please enter your password!',
                                },
                                {
                            validator: this.checkPasswordLength,
                                }],
                    })                  (
                <Input type="password" placeholder="Password"/>)}
                </FormItem>
                <FormItem>
                <Button   type="primary"
                          htmlType="submit">Login</Button>
                </FormItem>
            </Form>
        );
        else return (
            <div className="form-login">
                <a onClick={(e)=>this.props.clearSession()}>Logout</a>
                <p>Token: {this.props.token}</p>
            </div>
        )
    }
}
const FormLogin =  Form.create()(Login);

const mapStateToProps = (state) =>       {
    return  {
        token:state.token,
        error:state.error,
    }

};
const mapDispatchToProps = (dispatch) => {
    return  {
        fetchData:    (values)=>dispatch(fetchSession(values)),
        clearSession: ()=>dispatch(clearSession())
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(FormLogin);
