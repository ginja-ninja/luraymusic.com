@extends('layouts.admin_login')

@section('content')

{{ Notification::showAll() }}

    {{ Form::open() }}

        @if ($errors->has('login'))
            <div class="alert alert-error">{{ $errors->first('login', ':message') }}</div>
        @endif

        <ul class="form-fields">
            <li>
                {{ Form::label('email', 'Email', array('class' => 'beta')) }}
                {{ Form::text('email', null, array('class' => 'text-input')) }}
            </li>

            <li>
                {{ Form::label('password', 'Password', array('class' => 'beta')) }}
                {{ Form::password('password', array('class' => 'text-input')) }}
            </li>

            <li>
                {{ Form::submit('Login', array('class' => 'button')) }}
                <p><a href="{{ URL::route('admin.reset') }}">Forgot Password?</a></p>
            </li>
        </ul>

    {{ Form::close() }}

@stop