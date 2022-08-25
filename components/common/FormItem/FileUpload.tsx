import React, { useEffect, useState, useRef } from 'react'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CloseIcon from '@mui/icons-material/Close';
import { makeStyles } from '@mui/styles';

type FileType = "image" | "doc"

type fileItemType = {
  file: string;
  type: string;
  name: string;
}

type fileItemsType = fileItemType[]
 
type FileUploadProps = {
  label: string;
  name?: string;
  value?: string;
  fileType?: FileType;
  multiple?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FileExtensions = {
  image: ['jpg', 'jpeg', 'png', 'webp', 'gif'],
  doc: ['docx', 'doc', 'xlsx', 'pdf', 'txt', 'csv']
}


const useStyles = makeStyles({
  fileUploadBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    minHeight: '40px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    position: 'relative',
    cursor: 'pointer',
    '& input': {
      opacity: 0,
      width: '100%',
      height: '100%',
      position: 'absolute',
    },
  },
  fileUploadBoxLabel: {
    fontSize: '14px',
    color: '#999',
    width: '100%',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '5px',

    '& span': {
      zIndex: 1
    }
  },
  multipleFiles: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    gap: '10px',
    marginTop: '10px',

    '& > div': {
      width: '60px',
      height: '60px',
      cursor: 'pointer',

      '& > div': {
        width: '100%',
        height: '100%',
        boxShadow: '0px 0px 5px 0px #ccc',
        borderRadius: '5px',
        position: 'relative',

        '& span': {
          position: 'absolute',
          right: 0,
          top: 0,
          background: '#656565',
          lineHeight: 0,
          color: '#fff',
          borderRadius: '50%',
          padding: '2px',
          '& svg': {
            fontSize: '16px'
          }

        },

        '& img': {
          width: '100%',
          height: '100%',
          objectFit: 'contain'
        }
      }
    }
  }
})



const FileUpload: React.FC<FileUploadProps> = ({label, name, value, fileType="image", multiple=false, onChange}) => {

  const classes = useStyles();

  const inputFile = useRef<HTMLInputElement>(null)

  const [fileItems, setFileItems] = useState<fileItemsType>([])
  let items: fileItemType[] = []

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = (e.target as HTMLInputElement).files || []
    if (multiple) {
      for (let index = 0; index < files.length; index++) {
        const file = files[index];        
        const { name, size } = file
  
        const fileExtension = name.split('.').pop() || '';
        
        if (FileExtensions[fileType]?.includes(fileExtension)) {
          const fileReader = new FileReader()
          fileReader.onloadend = (element: any) => {
            items.push({file: element.target.result, type: fileType, name: name})
            setFileItems(items)
          }

          fileReader.readAsDataURL(file)
        }
      }
    }
    else{
      const file = files[0];
      if (file) {
        const { name, size } = file

        const fileExtension = name.split('.').pop() || '';
  
        if (!FileExtensions[fileType]?.includes(fileExtension)) {
          e.preventDefault()
          return false
        }

        const fileReader = new FileReader()
        fileReader.onload = (element: any) => {
          setFileItems([{file: element.target.result, type: fileType, name}])
        }

        fileReader.readAsDataURL(file)        
      }
      else{
        setFileItems([])
        e.preventDefault()
        return false
      }
    }
  }

  const removeItem = (itemIndex: number) => {
    let fileItemsCopy = [...fileItems]

    fileItemsCopy.splice(itemIndex, 1)
    setFileItems(fileItemsCopy)

    if (fileItemsCopy.length === 0) {
      items = []

      inputFile.current?.value = ''
    }
    
  }

  const removeSingleItem = () => {
    setFileItems([])
    inputFile.current?.value = ''
  }


  return (
    <>
      <div className={classes.fileUploadBox}>
        {
          (fileItems.length === 1 && !multiple) ?
          <div className={classes.fileUploadBoxLabel}>
            <span>{fileItems[0].name}</span>
            <span onClick={removeSingleItem}><CloseIcon /></span>
          </div>
          :
          <div className={classes.fileUploadBoxLabel}>
            <CloudUploadIcon />
            <span>{label}</span>
          </div>
        }
        <input ref={inputFile} type="file" multiple={multiple} name={name} value={value} onChange={handleFile} />
      </div>
      {
        (fileItems.length > 0 && multiple) &&
        <div className={classes.multipleFiles}>
          {
            fileItems.map((item: fileItemType, index: number) => (
              <div key={`file-item-${index}`}>
                {
                  item.type === "image" ?
                  <div>
                    <img src={item.file} alt="file-array" />
                    <span onClick={()=> removeItem(index)}><CloseIcon /></span>
                  </div>
                  : ''
                }
              </div>
            ))
          }
        </div>
      }
    </>
  )
}

export default FileUpload