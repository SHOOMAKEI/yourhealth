import React, {useState} from 'react'
import Layout from '@/Shared/Layout';
import {InertiaLink, usePage} from "@inertiajs/inertia-react";
import {Inertia} from "@inertiajs/inertia";
import TextInput from "@/Shared/TextInput";
import CheckBoxInput from "@/Shared/CheckBoxInput";
import LoadingButton from "@/Shared/LoadingButton";
import TextAreaInput from "@/Shared/TextAreaInput";
import FileInput from "@/Shared/FileInput";
import CreatableSelect from 'react-select/creatable';
import ReactQuill,{ Quill, Mixin, Toolbar } from 'react-quill'
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';
import TagInput from "@/Shared/TagInput";


const Create = () => {
    const { errors, status, alertType, tags } = usePage().props;
    const [sending, setSending] = useState(false);
    const [values, setValues] = useState({
        title: '',
        cover_image: '',
        body: '',
        tags:  [ ],
        suggestions: tags
    });

   // const modules = {
   //      toolbar: [
   //          [{ 'header': [1, 2, false] }],
   //          ['bold', 'italic', 'underline','strike', 'blockquote'],
   //          [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
   //          ['link', 'image'],
   //          ['clean']
   //      ],
   //  }
   //
   //   const  formats = [
   //          'header',
   //          'bold', 'italic', 'underline', 'strike', 'blockquote',
   //          'list', 'bullet', 'indent',
   //          'link', 'image'
   //      ]

    function handleChange(e) {
        const key = e.target.name;
        const value =
            e.target.type === 'checkbox' ? e.target.checked : e.target.value;

        setValues(values => ({
            ...values,
            [key]: value
        }));
    }

   function handleTagChange(newValue, actionMeta) {
       setValues(values => ({
           ...values,
           [actionMeta.name]: [...actionMeta.name, newValue]
       }));

    }

    function handleFileUpload(field, file) {
        setValues(values => ({
            ...values,
            [field]: file
        }));
    }

  function  handleQuillChange(value, delta, source, editor) {

        setValues(values =>({...values, body:value}));
    }

    function handleSubmit(e) {
        e.preventDefault();
        setSending(true);
        Inertia.post(route('health_education.store'), values).then(() => {
            setSending(false);
        });
    }
    function handleTagDelete(i) {
      setValues(values => ({...values ,tags:values.tags.filter((tag, index) => index !== i)}));
    }

    function handleTagAddition(tag){
      setValues(values => ({...values,tags:[...values.tags, tag
    ]
    }));
    }

    function  handleTagDrag(tag, currPos, newPos){
      let tags = [...values.tags];
      const newTags = tags.slice();

      newTags.splice(currPos, 1);
      newTags.splice(newPos, 0, tag);

      // re-render
      setValues(values => ({...values, tags: newTags}));
    }



    return(
        <>
            <div className="row">
                <div className="col-12">
                    <div className="page-title-box">
                        <h4 className="page-title">Create Article</h4>
                    </div>
                </div>
            </div>
            <div className="row col-lg-12">
                <form onSubmit={handleSubmit} className="col-lg-12">
                    <TextInput
                        name="title"
                        type="text"
                        placeholder="Title"
                        label="Title"
                        errors={errors.title}
                        value={values.title}
                        onChange={handleChange}
                    />
                    <FileInput
                        name="cover_image"
                        type="text"
                        placeholder="Cover Image"
                        label="Cover Image"
                        errors={errors.cover_image}
                        value={values.cover_image}
                        callback={handleFileUpload}
                    />
                    <ReactQuill
                        value={values.body}
                        onChange={handleQuillChange}
                    />
                    <TagInput
                        name="tags"
                        label="Tags"
                        placeholder="Tags"
                        errors={errors.tags}
                        tags={values.tags}
                        suggestions={values.suggestions}
                        handleDelete={handleTagDelete}
                        handleAddition={handleTagAddition}
                        handleDrag={handleTagDrag}
                    />

                    <div className="form-group my-3 row">
                        <div className="col-12 text-right">
                            <LoadingButton
                                type="submit"
                                className="btn btn-primary btn-block"
                                loading={sending}
                            >
                                Save changes
                            </LoadingButton>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

Create.layout = page => <Layout children={page} />;

export default Create;
