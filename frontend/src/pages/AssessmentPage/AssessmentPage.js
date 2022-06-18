import useCustomForm from "../../hooks/useCustomForm";

const BPPRenniePage = () => {
    const defaultValues = {
        time: "",
        title: "",
        price: "",
    };
    const [formData, handleInputChange, handleSubmit] = useCustomForm(
        defaultValues
    );

    return (
        <div className="container">
            <h1>Artwork Upload</h1>
            <body>
             <form className="form" onSubmit={handleSubmit}>
                <label>
                    Date{" "}
                    <input type="date" name="time" value={formData.time} onChange={handleInputChange} />
                </label>
                <label>
                    Questions{" "}
                    <input type="text" name="title" value={formData.time} onChange={handleInputChange} />
                </label>
             </form>
            </body>                
        </div>
    );
};

export default BPPRenniePage;
