import React from "react";

const PhotoCard = ({ onAddThumbnail }) => {
    return (
        <>
            <input
                name="camera"
                type="file"
                multiple
                id="camera-image"
                accept="image/*"
                onChange={(e) => onAddThumbnail(e)}
                className="hidden"
            />
            <label htmlFor="camera-image" className="w-cursor-pointer">
                <span className="bg-gray_10 inline-block border border-gray_90 p-[20px] rounded-md">
                     <span className="bg-gray-100 p-4">카메라 아이콘</span>
                </span>
            </label>
        </>
    );
};

export default PhotoCard;