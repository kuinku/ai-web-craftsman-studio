
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  Plus, 
  Type, 
  Image, 
  Square, 
  Play, 
  Save, 
  Eye, 
  Smartphone, 
  Tablet, 
  Monitor,
  Palette,
  Settings,
  Layers
} from 'lucide-react';

interface Element {
  id: string;
  type: 'text' | 'image' | 'button' | 'container';
  content: string;
  styles: Record<string, string>;
  x: number;
  y: number;
  width: number;
  height: number;
}

const Builder = () => {
  const [elements, setElements] = useState<Element[]>([]);
  const [selectedElement, setSelectedElement] = useState<string | null>(null);
  const [viewport, setViewport] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [isPreview, setIsPreview] = useState(false);

  const addElement = (type: Element['type']) => {
    const newElement: Element = {
      id: `element-${Date.now()}`,
      type,
      content: type === 'text' ? 'Sample Text' : type === 'button' ? 'Click Me' : '',
      styles: {
        backgroundColor: type === 'button' ? '#8b5cf6' : 'transparent',
        color: '#ffffff',
        padding: '12px 24px',
        borderRadius: '8px',
        fontSize: '16px',
        fontWeight: type === 'button' ? 'bold' : 'normal'
      },
      x: 50,
      y: 50,
      width: type === 'image' ? 200 : type === 'button' ? 120 : 150,
      height: type === 'image' ? 150 : type === 'button' ? 45 : 30
    };
    
    setElements(prev => [...prev, newElement]);
    setSelectedElement(newElement.id);
  };

  const updateElement = (id: string, updates: Partial<Element>) => {
    setElements(prev => prev.map(el => 
      el.id === id ? { ...el, ...updates } : el
    ));
  };

  const deleteElement = (id: string) => {
    setElements(prev => prev.filter(el => el.id !== id));
    if (selectedElement === id) {
      setSelectedElement(null);
    }
  };

  const getViewportWidth = () => {
    switch (viewport) {
      case 'mobile': return '375px';
      case 'tablet': return '768px';
      default: return '100%';
    }
  };

  return (
    <div className="h-screen bg-slate-900 flex">
      {/* Sidebar */}
      <div className="w-80 bg-slate-800 border-r border-slate-700 p-4 overflow-y-auto">
        <div className="space-y-6">
          {/* Elements Panel */}
          <div>
            <h3 className="text-white font-semibold mb-4 flex items-center">
              <Plus className="h-5 w-5 mr-2" />
              Add Elements
            </h3>
            <div className="grid grid-cols-2 gap-2">
              <Button
                variant="outline"
                className="flex flex-col items-center p-4 h-auto border-slate-600 text-white hover:bg-slate-700"
                onClick={() => addElement('text')}
              >
                <Type className="h-6 w-6 mb-2" />
                Text
              </Button>
              <Button
                variant="outline"
                className="flex flex-col items-center p-4 h-auto border-slate-600 text-white hover:bg-slate-700"
                onClick={() => addElement('image')}
              >
                <Image className="h-6 w-6 mb-2" />
                Image
              </Button>
              <Button
                variant="outline"
                className="flex flex-col items-center p-4 h-auto border-slate-600 text-white hover:bg-slate-700"
                onClick={() => addElement('button')}
              >
                <Play className="h-6 w-6 mb-2" />
                Button
              </Button>
              <Button
                variant="outline"
                className="flex flex-col items-center p-4 h-auto border-slate-600 text-white hover:bg-slate-700"
                onClick={() => addElement('container')}
              >
                <Square className="h-6 w-6 mb-2" />
                Container
              </Button>
            </div>
          </div>

          {/* Layers Panel */}
          <div>
            <h3 className="text-white font-semibold mb-4 flex items-center">
              <Layers className="h-5 w-5 mr-2" />
              Layers
            </h3>
            <div className="space-y-2">
              {elements.map((element) => (
                <div
                  key={element.id}
                  className={`p-3 rounded-lg cursor-pointer border ${
                    selectedElement === element.id
                      ? 'bg-purple-600 border-purple-500'
                      : 'bg-slate-700 border-slate-600 hover:bg-slate-600'
                  }`}
                  onClick={() => setSelectedElement(element.id)}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-white text-sm capitalize">{element.type}</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteElement(element.id);
                      }}
                      className="text-red-400 hover:text-red-300"
                    >
                      ×
                    </button>
                  </div>
                </div>
              ))}
              {elements.length === 0 && (
                <p className="text-slate-400 text-sm text-center py-4">
                  No elements added yet
                </p>
              )}
            </div>
          </div>

          {/* Properties Panel */}
          {selectedElement && (
            <div>
              <h3 className="text-white font-semibold mb-4 flex items-center">
                <Settings className="h-5 w-5 mr-2" />
                Properties
              </h3>
              <Card className="bg-slate-700 border-slate-600 p-4">
                <div className="space-y-4">
                  <div>
                    <label className="text-white text-sm mb-2 block">Content</label>
                    <input
                      type="text"
                      value={elements.find(el => el.id === selectedElement)?.content || ''}
                      onChange={(e) => updateElement(selectedElement, { content: e.target.value })}
                      className="w-full p-2 bg-slate-600 border border-slate-500 rounded text-white"
                    />
                  </div>
                  <div>
                    <label className="text-white text-sm mb-2 block">Background Color</label>
                    <input
                      type="color"
                      value={elements.find(el => el.id === selectedElement)?.styles.backgroundColor || '#000000'}
                      onChange={(e) => updateElement(selectedElement, { 
                        styles: { 
                          ...elements.find(el => el.id === selectedElement)?.styles,
                          backgroundColor: e.target.value 
                        }
                      })}
                      className="w-full h-10 rounded border border-slate-500"
                    />
                  </div>
                  <div>
                    <label className="text-white text-sm mb-2 block">Text Color</label>
                    <input
                      type="color"
                      value={elements.find(el => el.id === selectedElement)?.styles.color || '#ffffff'}
                      onChange={(e) => updateElement(selectedElement, { 
                        styles: { 
                          ...elements.find(el => el.id === selectedElement)?.styles,
                          color: e.target.value 
                        }
                      })}
                      className="w-full h-10 rounded border border-slate-500"
                    />
                  </div>
                </div>
              </Card>
            </div>
          )}
        </div>
      </div>

      {/* Main Canvas Area */}
      <div className="flex-1 flex flex-col">
        {/* Toolbar */}
        <div className="bg-slate-800 border-b border-slate-700 p-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              className="border-slate-600 text-white hover:bg-slate-700"
            >
              <Save className="h-4 w-4 mr-2" />
              Save
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsPreview(!isPreview)}
              className="border-slate-600 text-white hover:bg-slate-700"
            >
              <Eye className="h-4 w-4 mr-2" />
              {isPreview ? 'Edit' : 'Preview'}
            </Button>
          </div>

          <div className="flex items-center space-x-2">
            <Button
              variant={viewport === 'desktop' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewport('desktop')}
              className="border-slate-600"
            >
              <Monitor className="h-4 w-4" />
            </Button>
            <Button
              variant={viewport === 'tablet' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewport('tablet')}
              className="border-slate-600"
            >
              <Tablet className="h-4 w-4" />
            </Button>
            <Button
              variant={viewport === 'mobile' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewport('mobile')}
              className="border-slate-600"
            >
              <Smartphone className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Canvas */}
        <div className="flex-1 bg-slate-700 p-8 overflow-auto">
          <div
            className="bg-white mx-auto min-h-full relative"
            style={{ width: getViewportWidth(), minHeight: '600px' }}
          >
            {elements.map((element) => (
              <div
                key={element.id}
                className={`absolute cursor-pointer border-2 ${
                  selectedElement === element.id && !isPreview
                    ? 'border-purple-500'
                    : 'border-transparent'
                } ${isPreview ? 'pointer-events-none' : ''}`}
                style={{
                  left: element.x,
                  top: element.y,
                  width: element.width,
                  height: element.height,
                  ...element.styles
                }}
                onClick={() => !isPreview && setSelectedElement(element.id)}
              >
                {element.type === 'text' && (
                  <div className="w-full h-full flex items-center">
                    {element.content}
                  </div>
                )}
                {element.type === 'button' && (
                  <button className="w-full h-full rounded" style={element.styles}>
                    {element.content}
                  </button>
                )}
                {element.type === 'image' && (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center rounded">
                    <Image className="h-8 w-8 text-gray-400" />
                  </div>
                )}
                {element.type === 'container' && (
                  <div className="w-full h-full border-2 border-dashed border-gray-300 rounded"></div>
                )}
              </div>
            ))}
            
            {elements.length === 0 && !isPreview && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <Type className="h-16 w-16 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Start Building</h3>
                  <p>Add elements from the sidebar to begin designing your website</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Builder;
