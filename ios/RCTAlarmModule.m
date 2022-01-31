//
//  RCTAlarmModule.m
//  ExtremeAlarm
//
//  Created by Julianne Hong on 1/30/22.
//

#import <Foundation/Foundation.h>
#import <React/RCTLog.h>
// RCTCalendarModule.m
#import "RCTAlarmModule.h"

@implementation RCTAlarmModule

// To export a module named RCTAlarmModule
RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(createAlarm:(NSString *)name location:(NSString *)location)
{
  RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);
}

@end
