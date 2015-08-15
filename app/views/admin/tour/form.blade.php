<ul class="form-fields">

    <li>
        {{ Form::label('date', 'DATE', array('class' => 'beta')) }}
        {{ Form::text('date',null, array('class' => 'text-input date-select', 'readonly' => 'readonly', 'placeholder' => 'YYYY-MM-DD')) }}
    </li>

    <li>
        {{ Form::label('venue', 'VENUE', array('class' => 'beta')) }}
        {{ Form::text('venue', null, array('class' => 'text-input', 'placeholder' => 'The Fillmore')) }}
    </li>

    <li>
        {{ Form::label('location', 'LOCATION', array('class' => 'beta')) }}
        {{ Form::text('location', null, array('class' => 'text-input', 'placeholder' => 'San Francisco, CA')) }}
    </li>

    <li>
        {{ Form::label('show_info', 'SHOW INFO', array('class' => 'beta')) }}
        <span class="note">Put the link to the show info here.</span>
        {{ Form::text('show_info', null, array('class' => 'text-input', 'placeholder' => 'http://thefillmore.com/lurayshow')) }}
    </li>

    <li>
        {{ Form::label('support', 'SUPPORT (Optional)', array('class' => 'beta')) }}
        <span class="note">If there's a support group enter it here, otherwise leave it blank.</span>
        {{ Form::text('support', null, array('class' => 'text-input', 'placeholder' => 'S. Carey')) }}
    </li>

    <li>
        {{ Form::label('review_text', 'REVIEW BLURB (Optional)',  array('class' => 'beta')) }}
        <span class="note">If there's a review enter the blurb here, otherwise leave it blank.</span>
        {{ Form::textarea('review_text', null, array('class' => 'text-input', 'placeholder' => 'Amazing show!')) }}
    </li>

    <li>
        {{ Form::label('review_source', 'REVIEW SOURCE (Optional)', array('class' => 'beta')) }}
        <span class="note">If there's a review enter the source here (just the text not the link), otherwise leave it blank.</span>
        {{ Form::text('review_source', null, array('class' => 'text-input', 'placeholder' => 'Pitchfork')) }}
    </li>

    <li>
        {{ Form::label('review_link', 'REVIEW LINK (Optional)', array('class' => 'beta')) }}
        <span class="note">Enter the actual link to the full review here.</span>
        {{ Form::text('review_link', null, array('class' => 'text-input', 'placeholder' => 'http://pitchfork.com')) }}
    </li>

    <li>
        {{ Form::submit('Save', array('class' => 'button save')) }}
        <a class="cancel" href="{{ URL::route('admin.tour.index') }}">Cancel</a>
    </li>

</ul>