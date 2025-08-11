'use client'
// components/QuillEditor.tsx
import dynamic from 'next/dynamic';
import React, { RefAttributes } from 'react';
import 'react-quill-new/dist/quill.snow.css';

// Dynamically import ReactQuill and wrap it in forwardRef.
// This ensures that the component returned by dynamic is a client-side component
// that can handle a ref.
const ReactQuillNoSSR = dynamic(
    async () => {
        const { default: QuillComponent } = await import('react-quill-new');
        return React.forwardRef<any, any>((props, ref) => (
            <QuillComponent ref={ref} {...props} />
        ));
    },
    { ssr: false } // Essential for preventing server-side rendering
);

// This is the component you will import.
// It acts as a simple pass-through.
const QuillEditor = React.forwardRef<any, any>((props, ref) => {
    return <ReactQuillNoSSR {...props} ref={ref} />;
});

QuillEditor.displayName = 'QuillEditor';

export default QuillEditor;