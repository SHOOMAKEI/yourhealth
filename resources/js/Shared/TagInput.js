import React, { useState } from 'react';
import { WithContext as ReactTags } from 'react-tag-input';

const KeyCodes = {
    comma: 188,
    enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

export default ({ label, name, tags, suggestions, ...props }) => {

    return (
        <div className="form-group">
            <label className="form-control-label">{label}</label>
            <div className="bootstrap-tagsinput">
                <ReactTags
                    // classNames={{
                    //     tag: 'tag badge badge-primary',
                    //     remove: 'tag-input-remove',
                    //     suggestions: 'list-group-item',
                    //     activeSuggestion: 'active list-group-item'
                    // }}
                    tags={tags}
                    suggestions={suggestions}
                    delimiters={delimiters}
                    {...props}
                />
            </div>
        </div>
    )
};
